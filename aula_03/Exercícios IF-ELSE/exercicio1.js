const leia = require('readline-sync');


let numeroA = leia.questionInt("Digite o numero A: ");
let numeroB = leia.questionInt("Digite o numeor B: ");
let numeroC = leia.questionInt("Digite o numero C: ");

let total = numeroA + numeroB;
let soma;

console.log(numeroA," + ", numeroB," = ", total);

if(numeroA + numeroB > numeroC){
    soma = "A Soma de A + B é Maior do que C";
}else if(numeroA + numeroB < numeroC){
    soma = "A Soma de A + B é Menor do que C";
}else{
    soma = "A Soma de A + B é Igual a C";
}

console.log(soma);