const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', {
    titulo: String,
    diretor: String,
    ano: String,
    genero: String,
})

module.exports = Filme