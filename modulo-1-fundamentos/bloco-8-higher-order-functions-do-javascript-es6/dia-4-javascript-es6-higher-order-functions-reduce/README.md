# JavaScript ES6 - Higher Order Functions - reduce
<br>

## Exercício 1 - Código: [script-01](script-01.js)

<br>

**Requisito 1** - Dada uma matriz, transforme em um array.

```
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
}
```

Utilize o código a seguir para realização das atividades 2 a 4:

```
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
```
<br>

## Exercício 2 - Código: [script-02](script-02.js)

<br>

**Requisito 1** -  Crie uma string com os nomes de todas as pessoas autoras.

```
function reduceNames() {
  // escreva seu código aqui
}
```
<br>

## Exercício 3 - Código: [script-03](script-03.js)

<br>

**Requisito 1** -  Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

```
function averageAge() {
  // escreva seu código aqui
}
```
<br>

## Exercício 4 - Código: [script-04](script-04.js)

<br>

**Requisito 1** -  Encontre o livro com o maior nome.

```
function longestNamedBook() {
  // escreva seu código aqui
}
```
<br>

## Exercício 5 - Código: [script-05](script-05.js)

<br>

**Requisito 1** - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

```
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
}
```
<br>

## Exercício 6 - Código: [script-06](script-06.js)

<br>

**Requisito 1** - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato `{name: nome do aluno, average: media das notas}`. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de `reduce` será necessário utilizar também a função map. Dica: Você pode acessar o `index` do array dentro de map.

```
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
}
```