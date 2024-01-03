const Sequelize = require('sequelize');
const db = require('../config/database');

const Word = db.define('word', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    word: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Word;
