let n = 5;
let inputLine = "";
let controle = n ;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < controle - 1) {
      inputLine += " ";
    } else {
      inputLine += "*";
    }
  }
  console.log(inputLine);
  inputLine = ""
  controle -= 1
}

