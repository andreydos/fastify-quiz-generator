const fastifySession = require('fastify-session');
const fastifyCookie = require('fastify-cookie');

const fastify = require('fastify')({
  logger: {
    prettyPrint: true,
    serializers: {
      res(res) {
        // the default
        return {
          statusCode: res.statusCode,
        };
      },
      req(req) {
        return {
          method: req.method,
          url: req.url,
          path: req.path,
          parameters: req.parameters,
          // Including the headers in the log could be in violation
          // of privacy laws, e.g. GDPR. You should use the "redact" option to
          // remove sensitive fields. It could also leak authentication data in
          // the logs.
          headers: req.headers,
        };
      },
    },
  },
});
const routes = require('./routes');

fastify.register(require('fastify-cors'), {
  methods: ['GET', 'PUT', 'POST'],
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
});

fastify.register(fastifyCookie);
fastify.register(fastifySession, {
  secret: 'generate_this_secret_key_and_store_it_secured_on_server',
  cookie: {
    secure: false,
  },
});

routes.forEach((route) => {
  fastify.route(route);
});

fastify.addHook('preHandler', async (request) => {
  console.log('preHandler');
  console.log(request.session.user);
  if (!request.session.user) {
    request.session.user = { name: `user${Math.random()}`, q: 0 };
  }
});

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start().then(() => {
});
