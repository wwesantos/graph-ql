const { gql } = require('apollo-server');

const typeDefs = gql`

  type Quote {
      id: ID!
      friendlyId: String!
      customerId: String!
      quoteItems: [QuoteItem]!
      placeRefs: [PlaceRef]
  }

  type QuoteItem {
      id: ID!
      productOffering: ProductOffering!
      placeRef: PlaceRef
  }

  type ProductOffering {
    id: String!
    name: String!
  }

  type PlaceRef {
    id: ID!
    address: String!
  }

  type Query {
    quote(friendlyId: String!): Quote
    productOfferings: [ProductOffering!]!
    quotes: [Quote!]!
  }

  type Mutation {
      createQuote(
        customerId: String!
      ): Quote
  }

`;

module.exports = typeDefs