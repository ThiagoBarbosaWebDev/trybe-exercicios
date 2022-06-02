// api.js
// const fetch = require('node-fetch');

const btc = document.querySelector('#btc')

const fetchCoins = async (crypto) => {
  const url = 'https://api.coincap.io/v2/assets';
  
  return await fetch(url)
  .then((response) => response.json())
  .then((data) => data.data.filter(({rank}) => rank <= 10))
}

const append = async () => {
  arr = await fetchCoins()
  arr.forEach(({id, priceUsd, symbol}) => {
    const newLi = document.createElement('li');
    newLi.innerText = `${id} (${symbol}): ${priceUsd}`
    btc.appendChild(newLi)
  });
}

append()
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`
