const leia = require('readline-sync');


let nomeDoador = leia.question("Digite o Nome do doador: ");
let idade = leia.questionInt("Digite a Idade do doador: ");
// ou doador keyInYNStrict("Primeira doacao de sangue? (Digite true ou false):  ") entende só yes e no ou true or false
let doador = leia.question("Primeira doacao de sangue? (Digite true ou false):  ").toLowerCase() === 'true';

let resultado;

if (idade < 18 || idade > 69) {
    resultado = `${nomeDoador} não está apto para doar sangue!`;
} else if (idade >= 18 && idade <= 60) {
    resultado = `${nomeDoador} está apto para doar sangue!`;
} else if (idade >= 60 && idade <= 69) {
    resultado = doador ? `${nomeDoador} não está apto para doar sangue!` : `${nomeDoador} está apto para doar sangue!`;
}

console.log(resultado);