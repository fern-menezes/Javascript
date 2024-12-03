const leia = require("readline-sync");

let n1, n2;

n1 = leia.questionInt("Digite o primeiro numero: ");
n2 = leia.questionInt("Digite o segundo numero: ");

console.log("A Variável n1 tem o valor: " + n1);
console.log("A Variável n2 tem o valor: " + n2);

console.log("A Soma de n1 + n2 é: ", n1 + n2);
console.log("A Subtração de n1 - n2 é: ", n1 - n2);
console.log("A Multiplicação de n1 * n2 é: ", n1 * n2);
console.log("A Divisão de n1 / n2 é: ", n1 / n2);


console.log("A Potenciação de n1 ^ n2 é: ", Math.pow (n1 , n2));
console.log("A Raiz Quadrada de n1 e n2 é: ", Math.sqrt (n1 , n2));

