class Allow {
    authorization(user, usersAllowed) {
        return (req, res, next) => {

            if(!user) {
                return res.status(401).json({message: 'Usuário não autenticado'})
            }

            if (!usersAllowed.includes(user.func)) {
                return res.status(403).json({message: "Acesso negado para o seu perfil."})
            }

            next()
        }
    }
}

export default Allow