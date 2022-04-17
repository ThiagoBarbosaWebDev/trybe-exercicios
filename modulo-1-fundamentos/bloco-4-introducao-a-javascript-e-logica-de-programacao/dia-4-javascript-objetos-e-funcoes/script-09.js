function palindromoFinder(word) {
  if (word === word.split("").reverse().join("")) {
    return true;
  }
  return false;
}

if (palindromoFinder("arara")) {
  console.log("PALINDROME!");
} else {
  console.log("NOT PALINDROME");
}
if (palindromoFinder("desenvolvimento")) {
  console.log("PALINDROME!");
} else {
  console.log("NOT PALINDROME");
}
