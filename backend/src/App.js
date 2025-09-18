import 'dotenv/config'
import express from 'express'
// import cookieParser from 'cookie-parser'
import cors from 'cors'

// routes
import userRoute from './routes/userRoute.js'

const app = express()
app.use(express.json())
// app.use(cookieParser())     

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.status(200).send('oii')
})

app.use('/', userRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})