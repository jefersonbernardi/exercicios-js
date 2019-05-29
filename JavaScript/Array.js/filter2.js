Array.prototype.filter2 = function (callback) {

    const newArray = []
    for (i = 0; i <= this.lenght; i++){
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
    } return newArray
}

const produtos = [{
    nome: 'Notebook',
    preco: 150,
    fragil: true
},
{
    nome: 'Ipad',
    preco: 2500,
    fragil: true
},
{
    nome: 'Aviao',
    preco: 10000,
    fragil: false
},
{
    nome: 'Copo de vidro',
    preco: 250,
}
]

const caro = produto => produto.preco >= 1000
const fragil = p => p.fragil
const copo = (p) =>{ if (p.nome  == 'Copo de vidro'){
    return true
}}
// console.log(produtos.filter(caro).filter(fragil))


console.log(produtos.filter(copo) == (produtos.copo))
