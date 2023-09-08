const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:17/aprendendo', { 

 useNewUrlParser: true 
})
.then(()=>{console.log("Mongobd Conectado...");})
.catch((erro)=>{console.log(`Houve um erro: ${erro}`);
})

//Model- Usuarios

//definindo model
//const UsuarioSchema = mongoose.schema({
const UsuarioSchema = new Schema({

 nome:{
  type: String,
  require: true
 },
 sobrenome:{
  type: String,
  required: true
 },
 email:{
  type: String,
  required: true
 },
 idade:{
  type: Number,
  required: true
 },
 pais:{
  type: String,
  require: false
 }
})

//collection
mongoose.model('usuarios', UsuarioSchema )

const Victor = mongoose.model('usuarios')

new Victor({
 nome: "fernando",
 sobrenome: "barbosa",
 email: "fernando.ffw@gmail.com",
 idade: 31,
 pais:"Brasil"
}).save().then(() => {
 console.log ("usuario criado com sucesso")
}).catch((erro) => {
 console.log (`Houve erro ao criar o usuario!\n Error: ${erro}`)
})