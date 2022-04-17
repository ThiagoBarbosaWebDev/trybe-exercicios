function verificaFimPalavra(word, ending) {
  if (word.slice(ending.length * -1) === ending) {
    return true;
  }
  return false;
}


console.log(verificaFimPalavra("trybe", "be")); // True
console.log(verificaFimPalavra("joaofernando", "fernan")); // False
