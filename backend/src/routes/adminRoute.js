import express from "express";
const router = express.Router()

import BookController from "../controllers/BookController.js";

router.get("/books", BookController.getBooks)
router.get("/books/:id", BookController.getBook)

router.post("/books", BookController.createBook)

router.put("/books/:id", BookController.updateBook)

router.delete("/books/:id", BookController.deleteBook)

export default router