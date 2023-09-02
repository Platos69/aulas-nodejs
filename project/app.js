let express = require('express')
const app = express()//cria uma copia inteira do framework express.js, logo ela representa o express.js agora

app.get('/'/*rota inicial*/, function(req, res){
  res.send('Olá mundo')
})

app.get('/voto'/*rota voto*/, function(req, res){
  res.sendFile(__dirname + '/html/index.html')
})

app.get('/sobre'/*rota sobre*/, function(req, res){
  res.send('minha página sobre aprendizado do node.js :)')
})

app.get('/ola/:nome/:profissao'/*rota nome*/, function(req, res){
  res.sendFile(`<h1>Seja bem vindo ${req.params.nome}!</h1><br><h2>Sua profissão é: ${req.params.profissao}</h2>`)
})

app.listen(8081, function(){
  console.log('Servidor rodando na url http://localhost:8081')
})
