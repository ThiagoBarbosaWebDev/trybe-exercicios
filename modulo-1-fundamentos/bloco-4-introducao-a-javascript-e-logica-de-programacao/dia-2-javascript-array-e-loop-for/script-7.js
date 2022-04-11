let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNum = 150;

for (i = 0; i < numbers.length; i++) {
  if (menorNum > numbers[i]) {
    menorNum = numbers[i];
  }
}

console.log(menorNum);
