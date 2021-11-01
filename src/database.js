// "Este archivo se encarga de crear la coneccion con la base de datos"
//https://www.youtube.com/watch?v=aNYX2F1RX-s&t=49s

//Para que funcion esto, se debe instalar dotenv (npm i dotenv)

//---------------- MongoDB Atlas -----------------
const mongoose = require('mongoose');
require('dotenv').config();

//MongoDB Atlas
const URI = process.env.MONGODB_URI
//hay que usar el Meta para USER y DB en el archivo .env en la raiz del proyecto.
// MONGODB_URI = mongodb+srv://USER:NuDmqT4Wl3JJKzen@cluster0.g7lcu.mongodb.net/DB?retryWrites=true&w=majority

mongoose.connect(URI, {
    useNewUrlParser: true 
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
    })
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;