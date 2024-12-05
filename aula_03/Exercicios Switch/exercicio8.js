const leia = require('readline-sync');

console.log("#########   CONTA BANCÁRIA   ##########");
console.log("1- SALDO");
console.log("2- SAQUE");
console.log("3- DEPÓSITO");


let operacao = leia.questionInt("\nSelecione a operacao: ")

let saldo = 1000.00.toFixed(2);
let saque;
let deposito;
let resultado;



switch(operacao){
    case 1:
        console.log(`Operação - Saldo \n Saldo: R$${saldo}`);
        break
    case 2:
        saque = leia.questionInt("\nInforme o valor: ");
        if(saque > saldo){
            console.log(`Operação - Saque \n Saldo Insuficiente!`);
        }else if(saque <= saldo){
            console.log(`Operação - Saque \n Novo Saldo: R$${saldo - saque}`);
        }
        break
    case 3:
        deposito = leia.questionInt("\nInforme o valor: ");
        console.log(`Operação - Depósito \n Novo Saldo: R$${saldo + deposito}`);
        break
    default:
        console.log("Operação Inválida!")
}