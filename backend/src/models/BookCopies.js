import { Model, DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";
import Book from "./Book.js";

class BookCopy extends Model { }

BookCopy.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    status: {
        type: DataTypes.ENUM('available', 'reserved', 'lost'),
        allowNull: false,
        defaultValue: 'available'
    },

    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Book,
            key: 'id'
        },
    }

}, {
    sequelize,
    modelName: 'BookCopy',
    tableName: 'book_copies',
})

Book.hasMany(BookCopy, { foreignKey: 'bookId' })
BookCopy.belongsTo(Book, { foreignKey: 'bookId' })

export default BookCopy