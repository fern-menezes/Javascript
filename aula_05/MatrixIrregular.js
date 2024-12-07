//MATRIZES IRREGULARES

const leia = require("readline-sync");
// define a quantidade colunas
let matrizInt = new Array(3);

// define a quantidade de linhas 
for (let i = 0; i < matrizInt.length; i++){
    matrizInt[i] = Array(3);
}
// para automatizar a incersão de dados, cria-se um for; preencher os dados
for(let inLine = 0; inLine < matrizInt.length; inLine++){ // intera apenas as linhas
    
    for (let inCol = 0; inCol < matrizInt.length; inCol++){//interar as colunas
        matrizInt[inLine][inCol] = leia.questionInt('Digite algo kkkk: ')
    }

    } 

    console.table(matrizInt);