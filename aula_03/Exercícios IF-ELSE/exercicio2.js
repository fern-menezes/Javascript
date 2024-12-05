const leia = require('readline-sync');


let numero = leia.questionInt("Digite um numero: ");

let mensagem;


if(numero > 0 && numero % 2 === 0){
    mensagem = `O número ${numero} é par e positivo`;
}else if(numero < 0 && numero % 2 === 0){
    mensagem = `O número ${numero} é par e negativo`;
}else if(numero > 0 && numero % 2 !== 0){
    mensagem = `O número ${numero} é ímpar e positivo`;
}else if(numero < 0 && numero % 2 !== 0){
    mensagem = `O número ${numero} é ímpar e negativo`;
}

console.log(mensagem);