const {Schema, model} = require('mongoose');

const registroSchema = new Schema({
    valor: {type: Number},
    fecha: {type: String},
    hora:{type: String},
    Created_at: {type: Date, default: Date.now()}
});

module.exports = model('Registro' , registroSchema);