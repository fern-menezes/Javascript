const leia = require('readline-sync');

let nota1 = leia.questionFloat("Digite a primeira nota: ");
let nota2 = leia.questionFloat("Digite a segunda nota: ");
let nota3 = leia.questionFloat("Digite a terceira nota: ");
let nota4 = leia.questionFloat("Digite a quarta nota: ");

let media = (nota1 + nota2 + nota3 + nota4) / 4;
let mediaFinal = media.toFixed(2);

if(media >= 7.0){
    var mensagem = "Parabéns! Você passou ✔️"
}else{
    var mensagem = "Que Pena! Você foi reprovado ❌"
}
console.log(`Aqui está a sua média final: ${mediaFinal}`, "\n" ,mensagem);