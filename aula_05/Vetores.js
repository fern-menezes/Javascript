const leia = require("readline-sync");

let vetorStrings = ["Boxer", "Pastor Alemão", "Pinsher","Husky Siberiano", "Corgi", "Bulldog"];
vetorStrings.push("Golden", "Pitbull");
vetorStrings.pop();

let vetoresInteiros = new Array(5);

for(let contador = 0; contador < vetorStrings.length ; contador++){
    console.log(vetorStrings[contador]);
}

console.log("O tamanho do seu vetor é: ", vetorStrings.length);

for(let contador = 0; contador < vetoresInteiros.length ; contador++){
    vetoresInteiros[contador] = leia.questionInt('Digite um numero: ');
}

console.table(vetoresInteiros);

//ordenar vetores, na string ele ordena de forma alfabetica

/* se for um numero ele vai precisar de uma lógica, que é uma função de comparação entre a 
posição a e b de cada string pois elas possuem uma ordenação unicode específica.

Assim, para ordenar números, ele compara se o segundo número é maior ou menor que o primeiro para encontrar a ordem de cada um. 
SE for positivo ele continua e se for negativo ele altera a ordem, ele faz a troca.

para ordem decrescente console.table(vetoresInteiros.sort((a,b) => b - a));
*/ 
console.table(vetoresInteiros.sort((a,b) => a - b));

console.log("Existe o numero 2? ", vetorNumeros.indexOf(2));