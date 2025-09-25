import Book from "../models/Book.js";
import BookCopy from "../models/BookCopies.js";

export async function getBooksWithStorageCount() {
    try {
        const books = await Book.findAll({
            include: [
                {
                    model: BookCopy,
                    attributes: ['id']
                }
            ]
        });

        return books.map(book => {
            const storage = book.BookCopies ? book.BookCopies.lenght : 0 // estoque

            return {
                id: book.id,
                title: book.title,
                author: book.author,
                description: book.description,
                image: book.image,
                genre: book.genre,
                publishedYear: book.publishedYear,
                storage: storage
            }
        })
    } catch (err) {
        console.error("Erro ao buscar livros com contagem", err);
        return []
    }
}
