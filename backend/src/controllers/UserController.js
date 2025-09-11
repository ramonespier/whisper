import User from "../models/User";

class UserController {
    
    static async getUsers(req, res) {
        try {
            const users = await User.findAll({
                where: { function: 'user' }
            })
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json({ message: 'Erro ao listar usuários' })
        }
    }

    static async getLibrarians(req, res) {
        try {
            const users = await User.findAll({
                where: { function: 'librarian' }
            })
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json({ message: 'Erro ao listar bibliotecários' })
        }
    }


}

export default UserController
