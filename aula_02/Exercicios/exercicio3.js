const leia = require('readline-sync');

let descritivo = "Aqui está o saldo total líquido a receber:  "

let salarioBruto = leia.questionFloat("Digite o salario: ");
let adicionalNoturno = leia.questionFloat("Digite o valor de adicional noturno: ");
let horasExtras = leia.questionFloat("Digite a valor de horas extras realizadas: ");
let descontos = leia.questionFloat("Digite o total de descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

let salarioFinal = new Intl.NumberFormat(
    'pt-br', { style: 'currency', currency: 'BRL'
    }).format(salarioLiquido);

console.log(descritivo + salarioFinal);