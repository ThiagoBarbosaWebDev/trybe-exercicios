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

console.log(isPrime(50))
console.log(isPrime(47))