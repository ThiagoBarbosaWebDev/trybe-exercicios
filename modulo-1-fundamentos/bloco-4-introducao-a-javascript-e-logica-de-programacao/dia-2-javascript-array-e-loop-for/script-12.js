let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index + 1]) {
    multiplNumbers.push(numbers[index] * numbers[index + 1]);
  } else {
    multiplNumbers.push(numbers[index] * 2);
  }
}

console.log(multiplNumbers);
