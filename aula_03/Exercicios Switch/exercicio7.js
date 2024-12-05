const leia = require('readline-sync');

console.log("#########   CALCULADORA   ##########");
console.log("1- SOMA");
console.log("2- SUBTRAÇÃO");
console.log("3- MULTIPLICAÇÃO");
console.log("4- DIVISÃO");


let num1 = leia.questionFloat("\nDigite o primeiro numero: ");
let operacao = leia.questionInt("\nSelecione a operacao: ")
let num2 = leia.questionFloat("\nDigite o segundo numero: ");

let resultado;

switch(operacao){
    case 1:
        resultado = num1 + num2;
        console.log(num1," + ", num2, " = ", resultado.toFixed(1));
        break
    case 2:
        resultado = num1 - num2;
        console.log(num1," - ", num2, " = ", resultado.toFixed(1));
        break
    case 3:
        resultado = num1 * num2;
        console.log(num1," * ", num2, " = ", resultado.toFixed(1));
        break
    case 4:
        console.log(num1 / num2);
        console.log(num1," / ", num2, " = ", resultado.toFixed(1));
        break
    default:
        console.log("Operação inválida!");
}