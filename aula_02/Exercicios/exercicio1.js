const leia = require('readline-sync');

let funcionario = leia.question("Digite o seu nome: ");

let salarioBruto = leia.questionFloat("Infome o seu salario: ");
let abono = leia.questionFloat("Informe o valor do abono: ");

let novoSalario = salarioBruto + abono;


console.log(`\nO salário total do funcionário ${funcionario} é de` , new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(novoSalario));
