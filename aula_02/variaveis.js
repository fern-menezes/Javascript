let nome = "Fern";
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.44;

let salario = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(salarioBruto);
const bonus = 0.05;

console.log("Nome do funcionário", nome);
console.log("Cargo: ", profissao);

console.log(`O salário bruto do colaborador ${nome} é ${salario}`);

console.log("Salário Líquido: ", new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(salarioBruto + (bonus * salarioBruto)));

