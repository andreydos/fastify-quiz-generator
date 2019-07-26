const statuses = require('../statuses-enum');
const data = require('../data');

exports.getByCategoryAndNumberID = async (req) => {
  const { categoryId, questionId } = req.params;
  const category = data.questions[categoryId];

  if (category && category[questionId]) {
    const response = {
      question: category[questionId].question,
      options: category[questionId].options,
    };

    return response;
  }

  return {
    status: statuses.notFound,
    details: 'Question not found',
  };
};
