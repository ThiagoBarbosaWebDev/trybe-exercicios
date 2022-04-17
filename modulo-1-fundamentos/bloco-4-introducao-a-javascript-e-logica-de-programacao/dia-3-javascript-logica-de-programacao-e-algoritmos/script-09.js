let n = 7;
let inputLine = "";
let middle = Math.ceil(n/2);
let controleLeft = middle;
let controleRight = middle;

for (let lineIndex = 1; lineIndex <= middle; lineIndex += 1) {
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (columnIndex === controleLeft || columnIndex === controleRight || lineIndex === middle) {
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
