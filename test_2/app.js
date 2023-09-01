let http = require('http');//tipo de modulo

http.createServer(function(req, res){
    res.end('OLá')
}).listen(8081)

console.log('O server está online!!!!')
