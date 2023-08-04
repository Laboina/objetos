const produtosConsumidos = [
    {
        nome: "Água",
        precoUnit: 250,
        quantidade: 1
    },

    {
        nome: "Coxinha",
        precoUnit: 900,
        quantidade: 2
    },

    {
        nome: "Refrigerante",
        precoUnit: 800,
        quantidade: 1
    }
]



const cartao = {
    nome: "Larissa",
    idade: 32,
    produtosConsumidos
}

let consumoTotal = 0;
for (produto of produtosConsumidos) {
    consumoTotal += produto.precoUnit * produto.quantidade;
}

const consumoTotalNovo = (consumoTotal / 100).toFixed(2);
console.log(`Sr(a) ${cartao.nome} o seu consumo foi de R$${consumoTotalNovo}`);

//console.log(cartao.nome);
//console.log(cartao.idade);
//cartao.idade = 30; //modificando a idade 
//console.log(cartao.idade); 
//console.log(cartao.produtosConsumidos[0].nome);
//console.log(cartao.produtosConsumidos[produtosConsumidos.length - 1].precoUnit);