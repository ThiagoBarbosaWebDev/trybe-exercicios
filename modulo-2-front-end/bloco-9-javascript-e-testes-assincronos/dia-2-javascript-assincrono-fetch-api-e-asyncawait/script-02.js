// api.js
const fetch = require('node-fetch');

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  return await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
}



fetchCoins();