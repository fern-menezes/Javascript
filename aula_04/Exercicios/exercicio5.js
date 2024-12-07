const leia = require('readline-sync');

let number = 1; // variavel que vai ser lida
let soma = 0; // variavel que vai guardar os números digitados

let somaMenos = 0;

// o que o código vai fazer
do{
    number = leia.questionInt('Digite um numero: '); // ler o numero
    if(number > 0){
        soma += number; //guardar os números em uma variavel
    }else{
        somaMenos += number;
    }
}while(number > 1 || number < -1);// e ele vai fazer isso enquanto o numero digitado for maior que 1 e menor que -1


// soma dos números positivos armazenados na variavel soma
console.log("A soma dos números positivos é: ", soma);
console.log("A soma dos números positivos é: ", somaMenos)

