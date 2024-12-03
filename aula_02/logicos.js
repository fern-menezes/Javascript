const leia = require("readline-sync");

const user = ["user@email.com.br", "admin@email.com.br",];
const senha = ["user1234", "adm123",];
const isAdm = false;
const isGerente = true;
const isBlock = false;

console.log("\nTela de Login");

let userLogin = leia.question("Digite o seu usuario: ");
let senhaLogin = leia.question("Digite a sua senha: ", {
  hideEchoBack: true,
});

if (userLogin === user && senhaLogin === senha) {
  var mensagem = "Usuário logado com Sucesso! Seja bem-vindo🎉";
} else {
  var mensagem = "Usuário não encontrado👨‍🚀";
}
console.log(mensagem);

if (!isBlock) {
  console.log("Usuário Ativo✔️");
} else {
  console.log("Usuário Inativo!❌ Contate o administrador");
  process.exit(0);
}
