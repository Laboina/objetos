const pessoa = {
    nome: "Larissa",
    idade: 32,
    peso: 65,
    altura: 1.69
}

const {nome, idade, ...outros} = pessoa;

console.log(nome, idade); 
console.log(outros); 