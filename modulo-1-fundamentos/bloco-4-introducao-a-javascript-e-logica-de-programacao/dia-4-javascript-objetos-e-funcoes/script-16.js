const numerosRomanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanReader(romanNum) {
  let sum = numerosRomanos[romanNum[romanNum.length - 1]];
  let atual = numerosRomanos[romanNum[romanNum.length - 1]];

  for (i = 2; i <= romanNum.length; i+= 1) {
    const prox = numerosRomanos[romanNum[romanNum.length - i]];
    if (atual <= prox) {

      sum += prox;
    } else {
      sum -= prox;
    }
    atual = prox
  }
  return sum;
}

console.log(romanReader("MCMXCIX")); // 2018
console.log(romanReader("VIII")); // 6
console.log(romanReader("IV")); // 4
console.log(romanReader("VI")); // 4
console.log(romanReader("II")); // 4
console.log(romanReader("CMLIII")); // 4