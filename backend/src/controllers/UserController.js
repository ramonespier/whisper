import User from "../models/User.js";

class UserController {

    static async getUsers(req, res) {
        try {
            const users = await User.findAll({
                where: { func: 'user' }
            })
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json({ message: 'Erro ao listar usuários' })
        }
    }

    static async getUser(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findByPk(id)
            if (!user) {
                res.status(404).json({ message: "Usuário não encontrado." });
                return;
            }
            res.status(200).json(user)

        } catch (err) {
            res.status(500).json({ message: 'Erro ao listar usuários' })
        }
    }


    static async createUser(req, res) {
        try {
            const { name, email, password } = req.body
            const user = await User.create({ name, email, password })

            if (!name || !email || !password) {
                res.status(400).json({ error: 'Campos obrigatórios não preenchidos' })
                return;
            };

            return res.status(201).json(user);

        } catch (error) {
            res.status(500).json({ error: "Ocorreu um erro interno no servidor." })
            console.error('Erro ao criar usuario:', error)
        }
    }

}

export default UserController
