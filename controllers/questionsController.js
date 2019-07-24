const statuses = require('../statuses-enum');
const data = require('../data');

exports.getByCategoryAndNumberID = async (req) => {
  const { categoryId } = req.params;
  const category = data.questions[categoryId];

  if (category && category[req.session.user.q]) {
    const response = {
      question: category[req.session.user.q].question,
      options: category[req.session.user.q].options,
    };
    req.session.user.q += 1;

    return response;
  }

  return {
    status: statuses.notFound,
    details: 'Question not found',
  };
};
