const leia = require('readline-sync');


let nome = leia.question("Digite seu nome: ");

console.log("\n====Faixa Etárias==== \n1 - Idade  entre 0 e 10 anos \n2 - Idade  entre 11 e 29 anos \n3 - Idade  entre 30 e 45 anos \n4 - Idade  entre 45 e 59 anos \n5 - Idade  entre 59 e 65 anos \n6 - Idade acima de 65 anos");

let faixaEtaria = leia.questionInt("Infome a sua faixa etaria: ");
let valor;

switch(faixaEtaria){
    case 1:
        valor = 100.00;
        break;
    case 2:
        valor = 200.00;
        break
    case 3:
        valor = 300.00;
        break;
    case 4:
        valor = 500.00;
        break
    case 5:
        valor = 600.00;
        break;
    case 6:
        valor = 1000.00;
        break;
    default:
        console.log("Faixa etária inválida!");
        process.exit(0);
}

console.log(`O valor do Plano de Saúde do(a) ${nome} é de R$${valor.toFixed(2)}`);