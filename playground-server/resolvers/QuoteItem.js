const QuoteItem = {
  productOffering: (parent, args, {productOfferings}) => {
    return productOfferings.find((productOffering) => {
      return parent.offeringId == productOffering.id
    })
  },
  placeRef: (parent, args, {placeRefs}) => {
    return placeRefs.find((placeRef) => {
      return placeRef.id == parent.id
    })
  }
}

module.exports = QuoteItem