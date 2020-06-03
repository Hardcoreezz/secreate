const calculateCartPrice = (currencies, products, requestCurrency = 'RUB') => {
  let result = {
    RUB: 0,
    EUR: 0,
    USD: 0
  }
  for (let product of products) {
    let currency = currencies[product.currency] ? currencies[product.currency] : { Value: 1 }
    result[requestCurrency] += product.price * currency.Value * product.quantity
  }
  for (let key in result) {
    if (key === requestCurrency) continue
    result[key] = result[requestCurrency] / currencies[key].Value
  }
  return result
}

module.exports = calculateCartPrice