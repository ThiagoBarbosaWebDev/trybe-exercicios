function encode(string) {
  // seu código aqui
  let l33t = '';
  for (letter of string) {
    if (letter === 'a') {
      l33t += 1;
    } else if (letter === 'e') {
      l33t += 2;
    } else if (letter === 'i') {
      l33t += 3;
    } else if (letter === 'o') {
      l33t += 4;
    } else if (letter === 'u') {
      l33t += 5;
    } else {
      l33t += letter;
    }
  }
  return l33t;
}

function decode(string) {
  // seu código aqui
  let l33t = '';
  for (letter of string) {
    if (letter === '1') {
      l33t += 'a';
    } else if (letter === '2') {
      l33t += 'e';
    } else if (letter === '3') {
      l33t += 'i';
    } else if (letter === '4') {
      l33t += 'o';
    } else if (letter === '5') {
      l33t += 'u';
    } else {
      l33t += letter;
    }
  }
  return l33t;
}
console.log(encode('aeiou'))
module.exports = {encode, decode}
