// "Este archivo se encarga de arracar todo el servidor"
//https://www.youtube.com/watch?v=aNYX2F1RX-s&t=49s

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const uuid = require('uuid');
const { request } = require('http');
const {format} = require('timeago.js');

//initializations
const app = express();
require('./database');

//Server settings (Declarar el puerto, la carpeta Views y el motor de plantillas)
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares (Morgan y Multer)
app.use(morgan('dev'));
    //Esta linea de arriba sirve para ver por consola que se ha solicitado el servidor
app.use(express.urlencoded({extended: false}));
    //Este metodo de ayuda a entender desde el servidor lo que los
    //los formularios estan enviando.

const storage = multer.diskStorage({
    destination: path.join(__dirname , 'public/img/uploads'),
    filename: (req, file, cb, filename) =>{
        cb(null, file.originalname);
    }
});
app.use(multer({storage: storage}).single('image'));

//Global Variables
app.use((req,res,next)=>{
    app.locals.format = format;
    next();
});

//Routes
app.use(require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname , 'public')));

//Server Starter
app.listen(app.get('port'), ()=>{
    console.log(`Escuchando en el puerto ${app.get('port')}`);
});