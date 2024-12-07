const leia = require("readline-sync");

let vetorInt = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let busca = leia.questionInt('Digite o número que você deseja encontrar: ');

let encontrado = false; // 

for (let i = 0; i < vetorInt.length; i++) { //looping para fazer a busca no array

    // se o array tiver um numero correspondente na busca, ele mostra no console, se encontrar ele para
    if (vetorInt[i] === busca) {
        console.log(`O número ${busca} está localizado na posição: ${i}`);
        encontrado = true;
        break;
    }
}
//se a busca for diferente da busca dentro da array, informa a mensagem de erro
if (!encontrado) {
    console.log(`O número ${busca} não foi encontrado!`);
}