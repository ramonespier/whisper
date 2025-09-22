import express from "express";
const router = express.Router()

import UserController from "../controllers/UserController.js";

import AuthController from "../controllers/AuthController.js";

router.get('/users', UserController.getUsers)
router.get('/users/:id', UserController.getUser)
router.post('/users', UserController.createUser)

// router.post('/login')
router.post('/login', 
    AuthController.login, (req, res) => {
    res.json({ message: 'Acesso permitido!' })
})


export default router;