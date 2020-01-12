import express from 'express'
const router = express.Router();

import { createUser, listUsers, getUser, deleteUser } from '../functions/user'


router.post('/create', async(req, res) => {
    createUser(req, res);
});

router.get('/list', async(req, res) => {
    listUsers(req, res);
});

router.get('/user/:id', async(req, res) => {
    getUser(req, res);
});


router.put('/update/:id', async(req, res) => {
    updateUser(req, res);
});

router.delete('/delete/:id', async(req, res) => {
    deleteUser(req, res);
});

module.exports = router