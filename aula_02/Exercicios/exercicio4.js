const leia = require('readline-sync');

let n1 = leia.questionFloat("Insira o primeiro valor: ");
let n2 = leia.questionFloat("Insira o segundo valor: ");
let n3 = leia.questionFloat("Insira o terceiro valor: ");
let n4 = leia.questionFloat("Insira o quarto valor: ");


let calculo = (n1 * n2);
let calculo2 = (n3 * n4);

let resultado = (calculo - calculo2).toFixed(1);

console.log(resultado);