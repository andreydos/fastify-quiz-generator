const categoryController = require('../controllers/categoryController');
const questionsController = require('../controllers/questionsController');
const configController = require('../controllers/configController');

const categoryOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            name: { type: 'string' },
          },
        },
      },
    },
  },
};

const routes = [
  {
    method: 'GET',
    url: '/api/categories',
    handler: categoryController.getAll,
    schema: categoryOpts,
  },
  {
    method: 'GET',
    url: '/api/category/:categoryId/:questionId',
    handler: questionsController.getByCategoryAndNumberID,
  },
  {
    method: 'GET',
    url: '/api/quiz-config',
    handler: configController.getGameConfig,
  },
];

module.exports = routes;
