# Primeiros passos em Jest

<br>

### Exercício 1 - Código: [script-01.js](script-01.js), Teste: [script-01.test.js](script-01.test.js)

<br>

A função `sum(a, b)` retorna a soma do parâmetro a com o b:

Teste 1 - Teste se o retorno de sum(4, 5) é 9.

Teste 2 - Teste se o retorno de sum(0, 0) é 0.

Teste 3 - Teste se a função `sum` lança um erro quando os parâmetros são 4 e "5" (string 5).

Teste 4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada `sum(4, “5”)`.

<br>

### Exercício 2 - Código: [script-02.js](script-02.js), Teste: [script-02.test.js](script-02.test.js)

<br>

A função `myRemove(arr, item)` recebe um array `arr` e retorna uma cópia desse array sem o elemento item caso ele exista no array:

Teste 1 - Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` retorna o array esperado.

Teste 2 - Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` não retorna o array [1, 2, 3, 4].

Teste 3 - Verifique se a chamada `myRemove([1, 2, 3, 4], 5)` retorna o array esperado.

<br>

### Exercício 3 - Código: [script-03.js](script-03.js), Teste: [script-03.test.js](script-03.test.js)

<br>

A função `myFizzBuzz(num)` recebe um número num e retorna `fizzbuzz` se o número for divisível por 3 e 5, retorna `fizz` se for divisível apenas por 3, retorna `buzz` se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número:

Teste 1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado.

Teste 2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado.

Teste 3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado.

Teste 4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado.

Teste 5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado.

<br>

### Exercício 4 - Código: [script-04.js](script-04.js), Teste: [script-04.test.js](script-04.test.js)

<br>

A função `encode` e `decode` foram desenvolvidas em um projeto anterior, para elas crie os seguintes testes em Jest:

Teste 1 - Teste se `encode` e `decode` são funções.

Teste 2 - Para a função `encode` teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente.

Teste 3 - Para a função `decode` teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente.

Teste 4 - Teste se as demais letras/números não são convertidos para cada caso.

Teste 5 - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

<br>

### Exercício 5 - Código: [script-05.js](script-05.js), Teste: [script-05.test.js](script-05.test.js)

<br>

A função `techList` (desenvolvida em um projeto anterior) recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

```
{
  tech: 'nomeTecnologia',
  name: name,
}
```
Implemente a função `techList` a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto! É importante nunca alterar os testes ou as variáveis já escritas no código.

```
const techList = require('./techList.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

module.exports = techList;
```

<br>

### Exercício 6 - Código: [script-06.js](script-06.js), Teste: [script-06.test.js](script-06.test.js)

<br>

A função `hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:

```
// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'
```

Implemente a função `hydrate` a partir dos testes abaixo. Experimente refatorar a função que você criou para o projeto Playground Function! É importante nunca alterar os testes ou as variáveis já escritas no código.

```
const hydrate = require('./hydrate.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
```

<br>

### Exercício 7 - Código: [script-07.js](script-07.js), Teste: [script-07.test.js](script-07.test.js)

<br>

* A função;
* Os testes para essa função;

Considere os dados abaixo. Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele (firstName, lastName, specialities). Você também deverá criar os testes para essa função. Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada" . Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" .

```
// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
};
```

Como ponto de partida, comece implementando um teste para checar se a função existe. Execute o teste que você escreveu e implemente, na função, a funcionalidade que passará nesse teste. Repita esse processo até que todos os retornos esperados sejam testados.
