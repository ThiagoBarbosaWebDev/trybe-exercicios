// api.js
// const fetch = require('node-fetch');

const btc = document.querySelector('#btc')

const fetchCoins = async (crypto) => {
  const url = 'https://api.coincap.io/v2/assets';

  return await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data.filter(({rank}) => rank <= 10))
}

const append = (arr) => {
  
  arr.forEach(({id, priceUsd, symbol}) => {
    const newLi = document.createElement('li');
    newLi.innerText = `${id} (${symbol}): ${priceUsd}`
    btc.appendChild(newLi)
  });
}
// Bitcoin (BTC): 46785.06.
const coinStonks = fetchCoins().then(append)