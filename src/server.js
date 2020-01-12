import express from 'express';
import dbConfig from './db/config';
import mysql from 'mysql'
import user from './routes/user';

const PORT = 2000;

const pool = mysql.createPool(dbConfig)

const app = express();

app.pool = pool;

app.use('user', user)

app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`)
})

export default app;