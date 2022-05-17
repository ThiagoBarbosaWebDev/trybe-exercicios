let Array = [2, 3, 2, 5, 8, 2, 3];

let counter = 0
let mostRepeated = 0
let mostRepeatedNum;

for (number of teste) {
  for (number2 of teste) {
    if (number === number2) {counter += 1;} 
  }
  if (counter > mostRepeated) {mostRepeated = counter; mostRepeatedNum = number}
  counter = 0 
}

console.log(`O número que mais se repetiu foi o ${mostRepeatedNum} e se repetiu ${mostRepeated} vezes!`);