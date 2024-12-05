const leia = require('readline-sync');

console.log("#########   Tabela   ##########");
console.log("\n1- Gerente..... 10%");
console.log("\n2- Vendedor..... 7%");
console.log("\n3- Supervisor..... 9%");
console.log("\n4- Motorista..... 6%");
console.log("\n5- Estoquista..... 5%");
console.log("\n6- Técnico de TI..... 8%");

let nome = leia.question("Digite o nome do colaborador: ");
let cargo = leia.questionInt("Digite uma opcao entre 1 e 6: ");
let salario = leia.questionFloat("Digite o salario: ");

let reajuste;
let mensagem;

switch(cargo){
    case 1:
        reajuste = 0.10;
        mensagem = `Nome do colaborador: ${nome}  \n Cargo: Gerente \n Valor Total: R$${salario + (reajuste * salario)}`;
        break
    case 2:
        reajuste = 0.07;
        mensagem = `Nome do colaborador: ${nome}  \n Cargo: Vendedor \n Valor Total: R$${salario + (reajuste * salario)}`;
        break
    case 3:
        reajuste = 0.09;
        mensagem = `Nome do colaborador: ${nome}  \n Cargo: Supervisor \n Valor Total: R$${salario + (reajuste * salario)}`;
        break
    case 4:
        reajuste = 0.06;
        mensagem = `Nome do colaborador: ${nome}  \n Cargo: Motorista\n Valor Total: R$${salario + (reajuste * salario)}`;
        break
    case 5:
        reajuste = 0.05;
        mensagem = `Nome do colaborador: ${nome}  \n Cargo: Estoquista \n Valor Total: R$${salario + (reajuste * salario)}`;
        break
    case 6:
        reajuste = 0.08;
        mensagem = `Nome do colaborador: ${nome}  \n Cargo: Técnico de TI \n Valor Total: R$${salario + (reajuste * salario)}`;
        break
    default:
        console.log("Opção inválida!");
        process.exit(0);
}

console.log(mensagem);