// const numerosRomanos = {
//   i: 1,
//   v: 5,
//   x: 10,
//   l: 50,
//   c: 100,
//   d: 500,
//   m: 1000,
// };


// function romanize(num) {
//   var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
//   for ( i in lookup ) {
//     while ( num >= lookup[i] ) {
//       roman += i;
//       num -= lookup[i];
//     }
//   }
//   return roman;
// }

// function romanoParaDecimal(numero) {
//   numero = numero.toLowerCase();
//   const len = numero.length;
//   let soma = numerosRomanos[numero[len - 1]];
//   let atual = numerosRomanos[numero[len - 1]];
//   for (let i = 2; i <= len; i += 1) {
//     const prox = numerosRomanos[numero[len - i]];
//     if (atual <= prox) {
//       soma += prox;
//     } else {
//       soma -= prox;
//     }
//     atual = prox;
//   }
//   return soma;
// }

// console.log(romanoParaDecimal('MMXVIII')); // 2018
// console.log(romanoParaDecimal('MCMXCIX')); // 6
// console.log(romanoParaDecimal('MMXIX')); // 4

