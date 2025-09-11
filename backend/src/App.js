import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import sequelize from './database/sequelize.js'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.status(200).send('oii')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})