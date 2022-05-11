function hydrate(string) {
  let numbers = string.match(/\d+/g);
  let total = 0;
  for (number of numbers) {
    total += parseInt(number);
  }
  if (total > 1) {
    return `${total} copos de água`;
  } else {
    return `${total} copo de água`;
  }
}

module.exports = hydrate;

