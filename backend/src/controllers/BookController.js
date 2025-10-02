import Book from "../models/Book.js";
import { getBooksWithStorageCount } from "../services/BookService.js";
import fs from 'fs/promises'

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
            if (!book) {
                res.status(404).json({ message: "Livro não encontrado." });
                return;
            }

            res.status(200).json(book)

        } catch (err) {
            console.error("Erro ao buscar livro", err)
            res.status(500).json({ message: "Ocorreu um erro interno no servidor." })
        }
    }

    static async createBook(req, res) {
        const imageFile = req.file;
        const { title, author, description, genre, publishedYear } = req.body

        const deleteUploadedFile = async () => {
            if (imageFile) {
                try {
                    await fs.unlink(imageFile.path);
                } catch (unlinkError) {
                    console.error("Erro ao deletar o arquivo temporário:", imageFile.path, unlinkError);
                }
            }
        };

        try {

            const requiredFields = [
                { name: 'Título', value: title },
                { name: 'Autor', value: author },
                { name: 'Descrição', value: description },
                { name: 'Gênero', value: genre },
                { name: 'Data de lançamento', value: publishedYear },
                { name: 'Capa do livro', value: imageFile }
            ]

            const missingFields = requiredFields.find(field => !field.value)

            if (missingFields) {
                deleteUploadedFile()
                return res.status(400).json({ error: `O campo ${missingFields.name} é obrigatório.` })

            }

            if (!imageFile.mimetype.startsWith('image/')) {
                await deleteUploadedFile()
                return res.status(400).json({ error: "Tipo de arquivo não suportado! Apenas imagens são permitidas (.jpg, .png, etc.)." });
            }

            const imagePath = imageFile.path

            const book = await Book.create({
                title,
                author,
                description,
                image: imagePath,
                genre,
                publishedYear
            })

            res.status(201).json({ message: `Novo livro adicionado! ${book.title}` })

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