const wordDao = require('../Operations/crud.dao');
var wordController = {
    addword: addword,
    findwords: findwords,
    findwordById: findwordById,
    updateword: updateword,
    deleteById: deleteById
}

function addword(req, res) {
    let word = req.body;
    wordDao.create(word).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findwordById(req, res) {
    wordDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    wordDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "word deleted successfully",
                word: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateword(req, res) {
    wordDao.updateWord(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "word updated successfully",
                word: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findwords(req, res) {
    wordDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = wordController;
