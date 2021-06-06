const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficulty: Number,
});

module.exports = model('Cube', schema);