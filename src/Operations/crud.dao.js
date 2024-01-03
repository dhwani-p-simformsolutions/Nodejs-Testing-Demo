const word = require('../models/word.model');
var wordDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateWord: updateWord
}

function findAll() {
    return word.findAll();
}

function findById(id) {
    return word.findByPk(id);
}

function deleteById(id) {
    return word.destroy({ where: { id: id } });
}

function create(word1) {
    return word.create(word1);
}

function updateWord(word1, id) {
    var updateword = {
      word:word1.word
    };
    return word.update(word1, { where: { id: id } });
}
module.exports = wordDao;
