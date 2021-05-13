const { v4 } = require('uuid');

const Mutation = {
  createQuote: (parent, { customerId }, { quotes }) => {
    let newQuote = {
      id: v4(),
      customerId,
      friendlyId: quotes.length + 1,
    };

    console.log(newQuote);

    quotes.push(newQuote);

    return newQuote;
  },
};

module.exports = Mutation;
