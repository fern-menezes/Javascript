const leia = require("readline-sync");

// colunas da matriz
let matrizInt = new Array(3);

// Linhas da matriz
for (let iLinha = 0; iLinha < matrizInt.length; iLinha++) {
    matrizInt[iLinha] = Array(3);
}

// Recebe os valores para preencher a matriz
for (let iLinha = 0; iLinha < matrizInt.length; iLinha++) {
    for (let iColuna = 0; iColuna < matrizInt.length; iColuna++) {
        matrizInt[iLinha][iColuna] = leia.questionInt(`Digite o numero do elemento: `);
    }
}

// Mostra a tabela no console
console.table(matrizInt);

// Variáveis para armazenar as somas das diagonais
let somaDiagonal1 = 0;
let somaDiagonal2 = 0;

// Arrays para armazenar os valores das diagonais
let numerosDiagonal1 = [];
let numerosDiagonal2 = [];

// Calcula a soma e armazena os valores das diagonais principal e secundária
for (let i = 0; i < matrizInt.length; i++) {
    // Soma da diagonal principal e armazenamento dos valores, de acordo com o valor do índice e o comprimento de cada array, conforme os números inseridos
    somaDiagonal1 += matrizInt[i][i];
    numerosDiagonal1.push(matrizInt[i][i]);
    
    // Soma da diagonal secundária e armazenamento dos valores, de acordo com o valor do índice e o comprimento de cada array, conforme os números inseridos
    somaDiagonal2 += matrizInt[i][matrizInt.length - 1 - i];
    numerosDiagonal2.push(matrizInt[i][matrizInt.length - 1 - i]);
}

// Exibe as somas e os valores das diagonais
console.log("Elementos da Diagonal Principal: ", numerosDiagonal1);
console.log("Elementos da Diagonal Secundária: ", numerosDiagonal2);


console.log("Soma dos Elementos da Diagonal Principal: ", somaDiagonal1);
console.log("Soma dos Elementos da Diagonal Secundária: ", somaDiagonal2);

