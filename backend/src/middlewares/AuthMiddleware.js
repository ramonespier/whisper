import jwt from 'jsonwebtoken'

class AuthMiddleware {
    async verifyToken(req, res, next) {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: 'Não autorizado: token não fornecido' })
        }

        const [, token] = authHeader.split(' ')

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Token decodificado:', decoded)
            req.user = decoded
            next()
        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(403).json({ message: 'Não autorizado: Token expirado' });
            }
            res.status(403).json({ message: 'Não autorizado: Token inválido' });
        }
    }
}

export default AuthMiddleware;