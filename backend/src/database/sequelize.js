import Sequelize from "sequelize"
// import config from "../config/config.json";

// const sequelize = new Sequelize(config.development)
const sequelize = new Sequelize('whisper', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

async function testConnection() {
    try {
        await sequelize.authenticate()
        console.log('Conexão com o banco de dados estabelecida.')
    } catch (err) {
        console.error('Não foi possível conectar com o banco de dados: ', err)
    }
}

async function syncModels() {
    await sequelize.sync({});
    console.log('Modelos sincronizados com o banco de dados')
}


syncModels()
testConnection()

export default sequelize;