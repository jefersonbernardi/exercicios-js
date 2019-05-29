const categorias = require('./bancoDeDados')
var unirest = require("unirest");



var GlideRecord = require('servicenow-rest').gliderecord;
var show = function (obj) {
  console.log("Categoria criada: ", obj)
}

var insert = function (obj) {
  console.log(obj);
  var gr = new GlideRecord('dev79157', 'u_categories', 'admin', 'Jebits3det@', 'v1')

  gr.insert(obj).then(function (response) {
    show(response);
  }).catch(function (error) {
    console.log("Erro na categoria: ", error);
  });
};

let inserirClasse = async () => {
  return insert(obj)
}

inserirClasse().then(categorias.forEach(o => {
  obj = {
    "u_sym": o.sym,
    "u_id": o.id,
    "u_persid": o.persid,
    "u_del": o.del
  };
}))