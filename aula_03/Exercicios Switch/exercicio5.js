const leia = require('readline-sync');

console.log("#########   Menu   ##########");
console.log("\n1- Cachorro Quente..... R$10,00");
console.log("\n2- X-Salada..... R$15,00");
console.log("\n3- X-Bacon..... R$18,00");
console.log("\n4- Bauru..... R$12,00");
console.log("\n5- Refrigerante..... R$8,00");
console.log("\n6- Suco de Laranja..... R$13,00");

let opcao = leia.questionInt("\nDigite uma opcao do menu entre 1 e 6: ");
let quantidade = leia.questionInt("Digite a quantidade desejada: ");

let preço;
let pedido;

switch(opcao){
    case 1:
        preço = 10.00;
        pedido = `Produto: Cachorro-Quente \n Valor Total: R$${preço*quantidade}`;
        break
    case 2:
        preço = 15.00;
        pedido = `Produto: X-Salada \n Valor Total: R$${preço*quantidade}`;
        break
    case 3:
        preço = 18.00;
        pedido = `Produto: X-Bacon \n Valor Total: R$${preço*quantidade}`;
        break
    case 4:
        preço = 12.00;
        pedido = `Produto: Bauru \n Valor Total: R$${preço*quantidade}`;
        break
    case 5:
        preço = 8.00;
        pedido = `Produto: Refrigerante \n Valor Total: R$${preço*quantidade}`;
        break
    case 6:
        preço = 13.00;
        pedido = `Produto: Suco de Laranja \n Valor Total: R$${preço*quantidade}`;
        break
    default:
        console.log("Opção inválida!");
        process.exit(0);
}

console.log(pedido);