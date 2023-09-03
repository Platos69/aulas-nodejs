const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//config
  //template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
  //conexao mysql database
    const sequelize = new Sequelize('teste', 'root', '29052007', {
      host: 'localhost',
      dialect: 'mysql'
    })

app.listen(8081.function(){
  console.log('Servidor rodando na url http://localhost:8081')
})
