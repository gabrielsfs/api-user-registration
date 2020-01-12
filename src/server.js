import express from 'express'
import dbConfig from './db/config'
import user from './routes/user'

const PORT = 2000;
const app = express();


//verificar se existe um banco de dados
//verificar se existe uma tabela


app.use('user', user)









app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`)
})

export default app;