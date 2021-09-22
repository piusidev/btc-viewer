const formatPercent = (number) => {
  const percent = parseFloat(number).toFixed(2);

  if (percent < 0) {
    return percent
  }

  return `+${percent}`
}

const formatDolar = (number) => {
  const dolar =
    new Intl.NumberFormat('en-US',
    {
      style: 'currency',
      currency: 'USD',
      maximumSignificantDigits: 5
    }).format(number)
  
  return dolar.replace(/,/g, '.')
}

// TODO convert bitcoin to usd with this endpoint
// https://api.alternative.me/v2/ticker/bitcoin/?convert=USD

export default {
  formatPercent,
  formatDolar
}