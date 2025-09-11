import { Model, DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";

class User extends Model { }

User.init({

    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,

        validate: {
            isEmail: true,
        }
    },

    function: {
        type: DataTypes.ENUM('user', 'librarian'),
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
})

export default User;