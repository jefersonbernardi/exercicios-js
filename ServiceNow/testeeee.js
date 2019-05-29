
const a = [{
marca:'Mercedes',
valor: 3000
},{
marca: 'Audi',
valor: 4000
},{
marca: 'Fiat',
valor: 35000
},{
marca: 'Wolks',
valor: 50000
},{
marca: 'volvo',
valor: 124000
}]

const haha = {}

const teste = o=>{

return {"a": o.marca,
            "b": o.valor}
}

console.log(a.map(teste))