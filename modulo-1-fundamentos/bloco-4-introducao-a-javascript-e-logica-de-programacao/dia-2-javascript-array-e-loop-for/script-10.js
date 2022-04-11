let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// One line solution:
// console.log(numbers.sort((a,b)=>a-b));

for (let secondIndex = 1; secondIndex < numbers.length; secondIndex += 1) {
  for (let firstIndex = 0; firstIndex < secondIndex; firstIndex += 1) {
    if (numbers[secondIndex] < numbers[firstIndex]) {
      let position = numbers[secondIndex];
      numbers[secondIndex] = numbers[firstIndex];
      numbers[firstIndex] = position;
    }
  }
}


console.log(numbers);
