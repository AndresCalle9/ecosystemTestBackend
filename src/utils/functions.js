
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

  const validateDate = (rangeMin, rangeMax, date) => {
    try {
        let validated = false;
        if (Date.parse(date) > Date.parse(rangeMin) && Date.parse(date) < Date.parse(rangeMax)) {
            validated = true;
        }
        return validated
    } catch (error) {
        return ({ message: error.message });
    }
}

const getDatesBetweenRange = (initial, end, transactions) => {
  let ordersBetweenDates = [];
  for (let element of transactions) {
    const validationDate = validateDate(initial, end, element.date)
    if (validationDate) {
      ordersBetweenDates.push(element);
    }
  }
  return ordersBetweenDates
}

  module.exports = {calculateAccountMean, getDatesBetweenRange}