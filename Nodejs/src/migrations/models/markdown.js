'use strict';
const {
    Model, Sequelize, DataTypes
} = require('sequelize');
module.exports = (Sequelize, DataTypes) => {
    class Markdown extends Model {
        static associate(models) {

        }
    };
    Markdown.init({
        contentHTML: DataTypes.TEXT('long'),
        contentMarkdown: DataTypes.TEXT('long'),
        description: DataTypes.TEXT('long'),
        doctorId: DataTypes.INTEGER,
        specialtyId: DataTypes.INTEGER,
        clinicId: DataTypes.INTEGER,

    }, {
        Sequelize,
        modelName: 'Markdown',
    });
    return Markdown;
}