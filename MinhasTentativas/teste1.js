const _=require('lodash')
// const ii =[{oi:'tchau', q:'nada'},{oi:'tchauu', q:'nadaa'}]

// const oo =[{oi:'tchau', q:'nada'}]
var catVelha = [{
    "id": 425429,
    "persid": "pcat:425429",
    "del": 0,
    "sym": "INFCAD.Acesso.Indisponibilidade.Erro de Sistema"
}]
var catNova = [{
    "id": 425429,
    "persid": "pcat:425429",
    "del": 0,
    "sym": "INFCAD.Acesso.Indisponibilidade.Erro de Sistema"
},{"id": 425430,
"persid": "pcat:425430",
"del": 0,
"sym": "INFCAD.Acesso.Indisponibilidade.Erro de Codigo"
}]

catVelha.forEach(x => {
    catNova.forEach(y => {
        if(x.id ==y.id){
            console.log(x)
        }
    });
});
// const isso = _.difference(ii, oo)
// console.log(isso)