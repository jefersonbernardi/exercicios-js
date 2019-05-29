/*jshint esversion: 6 */
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

//   })
//   console.log(categoriaVelha)
//   console.log(contador)
// adicionar = _.difference(categoriaNova, categoriaVelha,);
// remover = _.difference(categoriaVelha.id, categoriaNova.id);
// console.log('adicionar: ', adicionar);
// console.log('remover: ', remover);

// _.pullAll(bancoDeDados, remover);

// adicionar.forEach(o => {
//     bancoDeDados.push(o);
// });

// console.log('bancoDeDados: ', bancoDeDados);
//8764 velho
//8719 novo

// adicionar.forEach(function(a){
//     console.log (a)
//     contador++
// })
//     console.log('contador: ',contador)
/*jshint esversion: 6 */

categoriaNova.forEach(a => {
    categoriaVelha.forEach(b => {

        if(a.id ==b.id){
            console.log(a)
        }
        
    });
    
});