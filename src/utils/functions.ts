
  export const calculateAccountMean = (items:Array<any>) => {
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

  export const validateDate = (rangeMin:string, rangeMax:string, date:string) => {
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

export const getDatesBetweenRange = (initial:string, end:string, transactions:Array<any>) => {
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