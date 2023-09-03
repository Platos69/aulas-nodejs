const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '29052007', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize
  .authenticate()
  .then(function () {
    console.log('Conectado')
  })
  .catch(function (erro) {
    console.log('Falha ao tentar conectar!! Erro: ' + erro)
  })

const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})


const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})
