import Book from "../models/Book.js";
import { getBooksWithStorageCount } from "../services/BookService.js";

class BookController {
    static async getBooks(req, res) {
        try {
            const booksWithCount = await getBooksWithStorageCount();
            res.status(200).json(booksWithCount)
        } catch (err) {
            res.status(500).json({ error: "Erro ao buscar livros." })
        }
    }

    static async getBook(req, res) {
        try {
            const { id } = req.params;

            const book = await Book.findByPk(id)
            if(!book) {
                res.status(404).json({message: "Livro não encontrado."});
                return;
            }

            res.status(200).json(book)

        } catch (err) {
            console.error("Erro ao buscar livro", err)
            res.status(500).json({ message: "Ocorreu um erro interno no servidor." })
        }
    }

    static async createBook(req, res) {
        try {
            const { title, author, description, image, genre, publishedYear } = req.body
            const book = await Book.create({ title, author, description, image, genre, publishedYear })

            if (!title || !author || !description || !image || !genre || !publishedYear) {
                res.status(400).json({ message: "Campos obrigatórios não preenchidos." })
                return;
            }
            res.status(201).json(book)

        } catch (err) {
            res.status(500).json({ error: "Ocorreu um erro interno no servidor." })
            console.error("Erro ao criar livro", err)
        }
    }

    static async updateBook(req, res) {
        try {
            const { id } = req.params

            const { title, author, description, image, genre, publishedYear } = req.body
            const [rowsAffected] = await Book.update(
                { title, author, description, image, genre, publishedYear },
                { where: { id: id } }
            )

            if (rowsAffected === 0) {
                res.status(404).json({ message: "Livro não encontrado" })
                return;
            }

            res.status(200).json({ message: "Dados do livro atualizados com sucesso" })
        } catch (err) {
            res.status(500).json({ error: "Ocorreu um erro interno no servidor." })
            console.error("Erro ao atualizar livro:", err)
        }
    }

    static async deleteBook(req, res) {
        try {
            const { id } = req.params;

            const rowsAffected = await Book.destroy({
                where: { id: id }
            })

            if (rowsAffected === 0) {
                res.status(404).json({ message: "Livro não encontrado." })
                return;
            }

            res.status(200).json({ message: "Livro excluído com sucesso!" })
        } catch (err) {
            res.status(500).json({ error: "Ocorreu um erro interno no servidor." })
            console.error("Erro ao excluír livro:", err)
        }
    }
}

export default BookController