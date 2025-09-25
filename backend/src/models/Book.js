import { Model, DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";

class Book extends Model {}

Book.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    image: {
        type: DataTypes.STRING(1000),
    },

    genre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    author: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    publishedYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
})

export default Book