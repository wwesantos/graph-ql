const { ApolloServer } = require('apollo-server');
const { quotes, quoteItems, placeRefs, productOfferings } = require('./db')
const typeDefs = require('./schema')
const Query = require("./resolvers/Query")
const Quote = require("./resolvers/Quote")
const QuoteItem = require("./resolvers/QuoteItem")
const Mutation = require("./resolvers/Mutation")

  const server = new ApolloServer({ 
    typeDefs, 
    resolvers: {
      Query,
      Mutation,
      Quote,
      QuoteItem
    },
    context: {
      quotes,
      quoteItems,
      placeRefs,
      productOfferings
    }
  });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });