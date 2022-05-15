longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu' // retorna 'aconteceu'

console.log(longestWord.split(' ').sort((a,b) => b.length - a.length)[0])