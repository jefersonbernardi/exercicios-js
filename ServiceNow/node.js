var unirest = require("unirest");
let categories = require('./categorias')
var req = unirest("POST", "https://dev79157.service-now.com/api/now/table/u_categories");

req.headers({
  "cache-control": "no-cache",
  "Connection": "keep-alive",
  "content-length": "103",
  "accept-encoding": "gzip, deflate",
  "cookie": "JSESSIONID=BB1BB90FFDE0FD9ED2FDEB5A333C0D01; glide_user_route=glide.4d890dd901097dbe0da3babd582fd9d2; glide_session_store=42EBEDCEDB613300B33F61CA0B961920; BIGipServerpool_dev79157=612390666.52800.0000",
  "Host": "dev79157.service-now.com",
  "Postman-Token": "b01c956f-452f-46d6-9b89-4c7db0253d1e,45908e20-cf7a-4af3-9390-8ec39296ad67",
  "Cache-Control": "no-cache",
  "User-Agent": "PostmanRuntime/7.13.0",
  "Authorization": "Basic YWRtaW46SmViaXRzM2RldEA=",
  "Content-Type": "application/json",
  "Accept": "application/json"
});

req.send(`"\r\n{'u_sym':'${categories[2].sym}',\r\n'u_id':'${categories[2].id}',\r\n'u_persid':'${categories[2].persid}',\r\n'u_del':'${categories[2].del}'}"`);


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
}
);