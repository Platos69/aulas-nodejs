const express = require("express")
const app = express()
const { engine } = require("express-handlebars")
const Sequelize = require("sequelize")
const bodyParser = require("body-parser")


//config
  //template engine
  app.engine("handlebars", engine({ defaultLayout: "main" }))
  app.set("view engine", "handlebars")

  //body Parser
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())

  //conexao mysql database
  const sequelize = new Sequelize("teste", "root", "29052007", {
    host: "localhost",
    dialect: "mysql",
  })

//rotas
  app.get("/cad", function (req, res) {
    res.render("formulario")
  })

  /*.post para ser linkado ao tipo do meu formulario que é tipo post*/
  app.post('/add', function (req, res) {
    res.send(`<h1>Texto: ${req.body.titulo}<br>Conteudo: ${req.body.conteudo}</h1>`)
  })

app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081")
})

/*get envia via o url e post não*/
