const a = [{
    "sym": "INFCAD.Alteração de Lotação.Erro de Sistema",
    "id": 425435,
    "persid": "pcat:425435",
    "del": 0
},
{
    "sym": "INFCAD.Reset de Senha.Erro de Sistema",
    "id": 425444,
    "persid": "pcat:425444",
    "del": 0
},
{
    "sym": "INFCAD.Revisão de Acessos.Erro de Sistema",
    "id": 425447,
    "persid": "pcat:425447",
    "del": 0
},
{
    "sym": "INFCAD.Revogação de Acessos.Erro de Sistema",
    "id": 425450,
    "persid": "pcat:425450",
    "del": 0
},
{
    "sym": "INFCAD.Serviços.Erro de Sistema",
    "id": 425454,
    "persid": "pcat:425454",
    "del": 0
}]
var soma = 0
function teste(atributo){

 return (soma += atributo.id.toString())
}

console.log(a.map(teste))

console.log('soma > ',soma.toString())