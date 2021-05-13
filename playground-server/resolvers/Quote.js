const { placeRefs } = require("../db")

const Quote = {
  quoteItems: (parent, args, {quoteItems}) => {
    return quoteItems.filter((quoteItem) => {
      return quoteItem.quoteId == parent.friendlyId
    })
  },
  placeRefs: (parent, args, {placeRefs}) => placeRefs
}

module.exports = Quote