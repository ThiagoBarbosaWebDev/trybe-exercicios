const custo = 50;
const valor = 100;
const numeroDeProdutos = 1000;
let custoTotal = custo*1.2
let lucro = (valor - custoTotal) * numeroDeProdutos
custo===0 || valor===0 || numeroDeProdutos===0 ? console.log("ERROR: Pass a positive input") : console.log(lucro)