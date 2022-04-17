let array = ["java", "javascript", "python", "html", "css"];

let maxLengthSoFar = 0;
let indexOfMax = 0;

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > maxLengthSoFar) {
    maxLengthSoFar = array[i].length;
    indexOfMax = i;
  }
}

console.log(
  `${array[indexOfMax]} was the longest string with ${maxLengthSoFar} characters`
);
