
  const calculateAccountMean = (items) => {
    try {
      let accoutnMean = 0
      items.forEach(item => {
        accoutnMean += (parseInt(item.amount));
      })
      return accoutnMean/items.length
    } catch (error) {
      return ({ message: error.message });
    }
  }

  module.exports = {calculateAccountMean}