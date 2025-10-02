import express from "express";
const router = express.Router()
import upload from "../middlewares/upload.js";

import BookController from "../controllers/BookController.js";

router.get("/books", BookController.getBooks)
router.get("/books/:id", BookController.getBook)

router.post('/books', upload.single('image'), BookController.createBook)

router.put("/books/:id", BookController.updateBook)

router.delete("/books/:id", BookController.deleteBook)

export default router