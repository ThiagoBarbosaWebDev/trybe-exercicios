let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNum = 0;

for (i = 0; i < numbers.length; i++) {
  if (maiorNum < numbers[i]) {
    maiorNum = numbers[i];
  }
}

console.log(maiorNum);
