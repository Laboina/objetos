const pessoa = {
    nome: "Larissa",
    idade: 32,
    altura: 1.69,
    temCNH: true,
    apelidos: ["Lari", "Boina","Lissa"]
}; 

const textoCNH = pessoa.temCNH ? "Possui CNH" : "Não possui CNH";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} de altura, ${textoCNH} 
e tem os seguintes apelidos: `);

for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`); 
}