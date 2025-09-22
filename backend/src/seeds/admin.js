// seed de admin

import User from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();

const createAdmin = async () => {
    try {
        const name = 'admin'
        const email = 'adm@email.com';
        const password = 'senha123';
        const role = 'admin';

        const existingAdmin = await User.findOne({ where: { email } });
        if (existingAdmin) {
            console.log('O usuário admin já existe. Nenhuma ação necessária.');
            return;
        }

        await User.create({
            name: name,
            email: email,
            password: password,
            func: role
        });

        console.log('Usuário admin criado com sucesso!');

    } catch (error) {
        console.error('Erro ao criar o usuário admin:', error);
    };
}

createAdmin()