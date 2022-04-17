let numInput = 50;
let primos = [];

function isPrime(num) {
  let isDivisibleCounter = 0;
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      isDivisibleCounter += 1;
    }
    if (isDivisibleCounter > 1) {
      return false;
    }
  }
  return true;
}

for (let i = 2; i < numInput; i++) {
  if (isPrime(i)) {
    primos.push(i);
  }
}

console.log(`The biggest prime number between 0 and ${numInput} is ${primos.slice(-1).toString()}`);
