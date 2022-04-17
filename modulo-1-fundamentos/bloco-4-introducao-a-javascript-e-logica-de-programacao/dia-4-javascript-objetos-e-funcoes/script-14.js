function sumNum(num) {
  if (num - Math.floor(num) > 0) {
    return "ERROR: Please pass an integer";
  } else if (num < 0) {
    return "ERROR: Please pass a positive value";
  } else if (num >= 0) {
    let total = num;
    for (let index = 0; index < num; index++) {
      total += index;
    }
    return total;
  }
}


// Esperado 3, Resultado 3
console.log(sumNum(2));

// Esperado 6, Resultado 6
console.log(sumNum(3));

// Esperado 10, Resultado 10
console.log(sumNum(4));

// Esperado 15, Resultado 15
console.log(sumNum(5));

// ERROR: Please pass an integer
console.log(sumNum(5.34));

// ERROR: Please pass a positive num
console.log(sumNum(-5));
