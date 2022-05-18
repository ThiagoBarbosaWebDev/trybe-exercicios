const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


function containsA() {
  // escreva seu código aqui
  let array = [];
  names.forEach((str) => array.push(str.match(/a/gi).length))
  return array.reduce((acc, num) => acc + num, 0)
  // return names.reduce((acc, str) => acc.match(/a/gi).length + str.match(/a/gi).length, 0)
}

console.log(containsA()) 

// console.log(names[0].match(/a/gi).length)