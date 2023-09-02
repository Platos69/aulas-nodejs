const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'morais', '123456', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize
  .authenticate()
  .then(function () {
    console.log('Conectado')
  })
  .catch(function (erro) {
    console.log('Falha ao tentar conectar' + erro)
  })
