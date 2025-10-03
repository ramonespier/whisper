import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'

// routes
import userRoute from './routes/userRoute.js'
import adminRoute from './routes/adminRoute.js'

const app = express()
app.use('/files', express.static(path.join(process.cwd(), 'src/uploads')))

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json())


const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.status(200).send('oii')
})

app.use('/', userRoute);
app.use('/admin', adminRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})