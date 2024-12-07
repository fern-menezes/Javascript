const leia = require('readline-sync');


//declaração das variáveis
let idade = 1;
let menor21 = 0;
let maior50 = 0;


//inicio do looping, enquanto a idade for menor ou igual a zero ele vai ler o input
while(idade >= 0){
    idade = leia.questionInt('Digite uma idade: ');


    // se o input for menor que 0, o código vai parar
    if(idade < 0){
        break;
    }
    // se for menor que 21, vai guardar o valor nessa variável para mostrar posteriormente no console
    if(idade <=21 ){
        menor21++
    }
     // se for maior que 50, vai guardar o valor nessa variável para mostrar posteriormente no console
    if(idade >=50){
        maior50++
    }
}
 console.log("Total de pessoas menores de 21 anos: ", menor21);
 console.log("Total de pessoas maiores de 50 anos: ", maior50);
