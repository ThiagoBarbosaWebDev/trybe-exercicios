let n = 5;
let inputLine = "";
let middle = Math.ceil(n/2);
let controleLeft = middle;
let controleRight = middle;

for (let lineIndex = 0; lineIndex < middle; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n + 1 ; columnIndex += 1) {
    if (columnIndex >= controleLeft && columnIndex <= controleRight) {
      inputLine += "*";
    } else {
      inputLine += " ";
    }
  }
  console.log(inputLine);
  inputLine = ""
  controleLeft -= 1
  controleRight += 1
}