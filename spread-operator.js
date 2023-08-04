const pessoa = {
    nome: "Larissa",
    idade: 32,
    altura: 1.69,
    peso: 65
};

const endereco = {
    rua: "Aqui",
    numero: "32",
    bairro: "Bairro legal"
}; 

const objetoFundido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20
};

console.log(objetoFundido); 
