let Array = [2, 3, 2, 5, 8, 2, 3];

let counter = 0
let mostRepeated = 0
for (number of Array) {
  for (number2 of Array) {
    if (number === number2) {counter += 1;} 
  }
  if (counter > mostRepeated) {mostRepeated = number;}
  counter = 0 
}

console.log(`O número que mais se repetiu foi o ${mostRepeated}`);
