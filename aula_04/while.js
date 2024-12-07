//TABUADA COM WHILE
const leia = require('readline-sync');

let contador = 1
let numero = leia.questionInt("Digite um numero: ");


//se a condição não for certa, ele nem roda o código
while(contador <= 10){
    console.log(`${numero} X ${contador} = ${numero * contador}`);
    contador++
}