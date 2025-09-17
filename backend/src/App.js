import 'dotenv/config'
import express from 'express'

// routes
import userRoute from './routes/userRoute.js'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.status(200).send('oii')
})

app.use('/', userRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})