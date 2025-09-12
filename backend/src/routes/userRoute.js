import express from "express";
const router = express.Router()
import UserController from "../controllers/UserController.js";

router.get('/users', UserController.getUsers)
router.get('/users/:id', UserController.getUser)
router.post('/users', UserController.createUser)

export default router;