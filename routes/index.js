const categoryController = require('../controllers/categoryController');
const questionsController = require('../controllers/questionsController');

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
];

module.exports = routes;
