import 'dotenv/config'
import express from 'express'
import cors from 'cors'

// routes
import userRoute from './routes/userRoute.js'
import adminRoute from './routes/adminRoute.js'

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
app.use('/admin', adminRoute);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})