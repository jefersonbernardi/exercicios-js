const categorias = require('./bancoDeDados')
var unirest = require("unirest");



var GlideRecord = require('servicenow-rest').gliderecord;
var show = function (obj) {
  console.log("Categoria criada: ", obj)
}

// var promise1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve('foo');
//   }, 300);
//   promise1.then(function (value) {
//     console.log(value)
//   })
// });
var i = 0;

var insert = function (obj) {
  console.log(obj);
  setTimeout(function () {
    var gr = new GlideRecord('dev79157', 'u_categories', 'admin', 'Jebits3det@', 'v1')
    gr.get(obj).then(function (response) {
      show(response);
    }).catch(function (error) {
      console.log("Erro na categoria: ", error);
    });
  }, i* 1000)
};

categorias.forEach(o => {
  obj = {
    "u_sym": o.sym,
    "u_id": o.id,
    "u_persid": o.persid,
    "u_del": o.del
  };
  i++;
  insert(obj);
})