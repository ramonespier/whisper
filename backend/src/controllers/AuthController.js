import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import bcrypt from 'bcrypt-nodejs'

class AuthController {
    gerarToken(payload) {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET não definido no ambiente')
        }

        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })
    }

    static async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({
                where: { email: email }
            })

            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' })
            }

            const correctPassword = await bcrypt.compare(password, user.password)

            if (!correctPassword) {
                return res.status(401).json({ message: 'Senha incorreta' })
            }

            const token = this.gerarToken(user.id);
            return res.json({ message: "Login realizado com sucesso", token})
            
        } catch (error) {
            console.error('Erro ao fazer login: ', error)
            res.status(500).json({err: 'Erro ao fazer login'})
        }
    }
}

export default AuthController;