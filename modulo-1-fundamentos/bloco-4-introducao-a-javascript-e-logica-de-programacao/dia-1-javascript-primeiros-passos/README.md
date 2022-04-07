### EXERCÍCIO 1 - [Resolução](script-1.js) 
1. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.
2. Faça cinco programas, um para cada operação aritmética básica: 

>Adição (a + b)
>
>Subtração (a - b)
>
>Multiplicação (a * b)
>
>Divisão (a / b)
>
>Módulo (a % b)

### EXERCÍCIO 2 - [Resolução](script-2.js)
1. Faça um programa que retorne o maior de dois números.
2. Defina no começo do programa duas constantes com os valores que serão comparados.

### EXERCÍCIO 3 - [Resolução](script-3.js)
1. Faça um programa que retorne o maior de três números. 
2. Defina no começo do programa três constantes com os valores que serão comparados.

### EXERCÍCIO 4 - [Resolução](script-4.js)
1.Faça um programa que, dado um valor definido numa constante:
- retorne "positive" se esse valor for positivo
- retorne "negative" se for negativo e "zero" caso contrário.

### EXERCÍCIO 5 - [Resolução](script-5.js)
1. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
2. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
3. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
- Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
- Um ângulo será considerado inválido se não tiver um valor positivo.

### EXERCÍCIO 6 - [Resolução](script-6.js)
1. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
2. Faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
3. Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

### EXERCÍCIO 7 - [Resolução](script-7.js)
1. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
- Siga essas regras:
>Porcentagem >= 90 -> A
>
>Porcentagem >= 80 -> B
>
>Porcentagem >= 70 -> C
>
>Porcentagem >= 60 -> D
>
>Porcentagem >= 50 -> E
>
>Porcentagem < 50 -> F
2. O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

### EXERCÍCIO 8 - [Resolução](script-8.js)
1. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
2. Use somente um if.

### EXERCÍCIO 9 - [Resolução](script-9.js)
1. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
2. Use somente um if.

### EXERCÍCIO 10 - [Resolução](script-10.js)
1. Escreva um programa que se inicie com dois valores em duas constantes diferentes: 
- Custo de um produto
- Valor de venda. 
2. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
3. Atente que, sobre o custo do produto, incide um imposto de 20%.
4. Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

### EXERCÍCIO 11 - [Resolução](script-11.js)

1. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.  

Para as faixas de impostos, use as seguintes referências:
<table>
<tr><th colspan=2> INSS
 <tr>
 <th>Salário bruto <th> Alícota
 </tr>
   <tr>
 <td>Até 1.556,94<td> Isento
 </tr>
  <tr>
 <td>R$1.556,95 a R$ 2.594,92 <td> 9%
 </tr>
   <tr>
 <td>R$2.594,93 a R$ 5.189,82<td> 11%
 </tr>
   <tr>
 <td>R$3.75,.06 a R$ 4.664,68<td> 22.5%
 </tr>
  <tr>
 <td> Acima de R$ 5.189,82<td> 27.5% até um máximo de R$570.88
 </tr>
</table>

<table>
<tr><th colspan=3> Imposto de Renda
 <tr>
 <th>Salário Base <th> Alícota<th>Parcela a deduzir do imposto
 </tr>
   <tr>
 <td>Até R$ 1.903,98<td> Isento
 </tr>
  <tr>
 <td>R$ 1.903,99 a R$ 2.826,65 <td> 7.5% <td>142,80
 </tr>
   <tr>
 <td>R$ 2.826,66 a R$ 3.751,05 <td> 15% <td>354,80
 </tr>
   <tr>
 <td>R$ 3.751,06 a R$ 4.664,68<td> 22.5% <td>636,13
 </tr>
  <tr>
 <td> Acima de R$ 4.664,68<td> 27.5% <td>869.36
 </tr>
</table>


>Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O >>cálculo será:
>O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
>
>Para descobrir o salário-base, subtraia do salário bruto a alíquota >>do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
>
>Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
>R$ 2.670,00: salário com INSS já deduzido;
>7.5%: alíquota de imposto de renda;
>R$ 142,80 parcela a se deduzir do imposto.
>
>Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
>
>O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ >>57,45 (salário-base - valor IR) = R$ 2.612,55.
>Resultado: R$ 2.612,55.
