// TABUADA DO WHILE
const leia = require('readline-sync');

let contador = 1
let numero = leia.questionInt("Digite um numero: ");

// primeiro faz depois testa a condição
do{
    console.log(`${numero} X ${contador} = ${numero * contador}`);
    contador++
} while(contador <= 10)