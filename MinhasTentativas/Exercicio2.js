var categoriaNova=[]
var categoriaVelha=[]
const catnova = require('./catNova.js')
const catvelha = require('./bancoDeDados.js')
const _ = require('lodash');
var contador = 0
catnova.forEach(o => {
    obj = {
      "u_sym": o.sym,
      "u_id": o.id,
      "u_persid": o.persid,
      "u_del": o.del
    };
    // contador++;
    categoriaNova.push(obj);
  })

  catvelha.forEach(o => {
    obj = {
      "u_sym": o.sym,
      "u_id": o.id,
      "u_persid": o.persid,
      "u_del": o.del
    };
    categoriaVelha.push(obj);
})

categoriaNova.forEach(a => {
    categoriaVelha.forEach(b => {
        
        if(a == b){
            contador++
            console.log(b)}
    });
});
console.log(contador)