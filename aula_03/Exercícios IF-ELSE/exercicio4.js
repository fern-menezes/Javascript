const leia = require('readline-sync');


let subfilo = leia.question("Escolha: Vertebrado ou Invertebrado? ");
let classe = leia.question("Escolha: Ave, Mamifero, Inseto ou Anelideo? ");
let categoria = leia.question("Escolha: Carnivoro, Onivoro ou Herbivoro? ");

let mensagem;

if(subfilo === "Vertebrado" && classe === "Ave" && categoria === "Carnívoro"){
    mensagem = "Águia";
}else if(subfilo === "Vertebrado" && classe === "Ave" && categoria === "Onivoro"){
    mensagem = "Pomba";
}else if(subfilo === "Vertebrado" && classe === "Mamifero" && categoria === "Onivoro"){
    mensagem = "Homem";
}else if(subfilo === "Vertebrado" && classe === "Mamifero" && categoria === "Herbivoro"){
    mensagem = "Vaca";
}else if(subfilo === "Invertebrado" && classe === "Inseto" && categoria === "Hematogafo"){
    mensagem = "Pulga";
}else if(subfilo === "Invertebrado" && classe === "Inseto" && categoria === "Herbivoro"){
    mensagem = "Lagarta";
}else if(subfilo === "Invertebrado" && classe === "Anelideo" && categoria === "Hematogafo"){
    mensagem = "Sanguessuga";
}else if(subfilo === "Invertebrado" && classe === "Anelideo" && categoria === "Onivoro"){
    mensagem = "Minhoca";
}else{
    mensagem = "Opção Inválida";
}

console.log(mensagem);