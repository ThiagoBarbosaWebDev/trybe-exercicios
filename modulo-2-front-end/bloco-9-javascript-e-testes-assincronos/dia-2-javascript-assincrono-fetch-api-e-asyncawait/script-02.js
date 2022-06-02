// api.js
// const fetch = require('node-fetch');

const btc = document.querySelector('#btc')

const fetchCoins = async (crypto) => {
  const url = 'https://api.coincap.io/v2/assets';
  
  return fetch(url)
  .then((response) => response.json())
  .then((data) => data.data.filter(({rank}) => rank <= 10))
}

const getBrlRates = async () => {
  const ratesUrl = 'https://api.coincap.io/v2/rates';
  return fetch(ratesUrl)
  .then((response) => response.json())
  .then ((data) => data.data.find(({symbol}) => symbol === 'BRL').rateUsd)
}

const append = async () => {
  const crypto = await fetchCoins()
  const rates = await getBrlRates()
  crypto.forEach(({id, priceUsd, symbol}) => {
    const newLi = document.createElement('li');
    newLi.innerText = `${id} (${symbol}): R$ ${(priceUsd / rates).toFixed(2)}`
    btc.appendChild(newLi)
  });
}

append()

