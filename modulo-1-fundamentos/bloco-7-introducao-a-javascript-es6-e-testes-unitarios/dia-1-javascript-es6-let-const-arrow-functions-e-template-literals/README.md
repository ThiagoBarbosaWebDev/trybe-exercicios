# JavaScript ES6 - let, const, arrow functions e template literals
<br>

### Exercício 1 - Código: [script-01.js](script-01.js)

<br>

**Requisito 1** - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

**Requisito 2** - Modifique a estrutura da função para que ela seja uma `arrow function`.

**Requisito 3** - Modifique as concatenações para `template literals`.

<br>

### Exercício 2 - Código: [script-02.js](script-02.js)

<br>

**Requisito 1** - Copie o código abaixo e faça uma função que retorne o array `oddsAndEvens` em ordem crescente.

* Utilize template literals para que a chamada `console.log(<seu código>oddsAndEvens<seu código>);` retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

* Bônus: tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

<br>

### Exercício 3 - Código: [script-03.js](script-03.js)

<br>

**Requisito 1** - Crie uma função que receba um número e retorne seu fatorial.

* Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

* Bônus: tente fazer o mesmo exercício de forma recursiva.

<br>

### Exercício 4 - Código: [script-04.js](script-04.js)

<br>

**Requisito 1** - Crie uma função que receba uma frase e retorne qual a maior palavra.

Exemplo: ` longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu’ `

<br>

### Exercício 5 - Código: [exercise1.js](exercise1.js) e [exercise1.html](exercise1.html)

<br>

**Requisito 1** - Crie uma página que contenha:

* Um botão ao qual será associado um `event listener`.

* Uma variável `clickCount` no arquivo JavaScript que acumule o número de clicks no botão.

* Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável `clickCount` é atualizada.


<br>

### Exercício 6 - Código: [script-06.js](script-06.js)

<br>

**Requisito 1** - (Função 1) Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

> Exemplo:
> String determinada: "Tryber x aqui!"
> Parâmetro: "Bebeto"
> Retorno: "Tryber Bebeto aqui!"

**Requisito 2** - Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.

**Requisito 3** - (Função 2) Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

> Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
> JavaScript;
> HTML; ... #goTrybe".
