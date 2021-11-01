const {Schema, model} = require('mongoose');

const imageSchema = new Schema({
    title: {type: String},
    description: {type: String, default: 'Description'},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: {type: Number},
    precio: {type: Number},
    adicionar: {type: String},
    veces: {type: Number},
    Created_at: {type: Date, default: Date.now()},
    public_id: {type: String}
});

module.exports = model('Image' , imageSchema);