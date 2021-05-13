const Query = {
  productOfferings: (parent, args, { productOfferings }) => productOfferings,
  quotes: (parent, args, { quotes }) => quotes,
  quote: (parent, {friendlyId}, {quotes}) => {
    return quotes.find((quote) => {
      return quote.friendlyId === friendlyId
    })
  }
}

module.exports = Query