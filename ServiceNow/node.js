var unirest = require("unirest");
var categorias = require('./categorias')
var req = unirest("POST", "https://dev79157.service-now.com/api/now/table/u_categories");
var request = require("request");
var http = require("https");
var unirest = require("unirest");

var req = unirest("POST", "https://dev79157.service-now.com/api/now/table/u_categories");

req.headers({
  "cache-control": "no-cache",
  "Connection": "keep-alive",
  "content-length": "101",
  "accept-encoding": "gzip, deflate",
  "cookie": "JSESSIONID=BB1BB90FFDE0FD9ED2FDEB5A333C0D01; glide_user_route=glide.4d890dd901097dbe0da3babd582fd9d2; BIGipServerpool_dev79157=612390666.52800.0000",
  "Host": "dev79157.service-now.com",
  "Postman-Token": "e5d79154-d507-4c59-8d9b-1757f8e555bf,94ea858e-b5cd-41f7-9c6d-964051406374",
  "Cache-Control": "no-cache",
  "User-Agent": "PostmanRuntime/7.13.0",
  "Authorization": "Basic YWRtaW46SmViaXRzM2RldEA=",
  "Content-Type": "application/json",
  "Accept": "application/json"
});

  req.send("{'u_sym':'INFCAD.Acesso.Erro Operacional',\r\n'u_id':'425430',\r\n'u_persid':'pcat:425430',\r\n'u_del':'0'}");

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
