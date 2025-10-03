"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { getCatalog } from "@/api/api"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Catalog() {

    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadCatalog = async () => {
            setIsLoading(true)
            try {
                const result = await getCatalog()

                if (result.error) {
                    setError(result.error);
                    setBooks([]);
                } else {
                    setBooks(result);
                    setError(null);
                }
            } catch (error) {
                setError("Erro de conexão no frontend");
            } finally {
                setIsLoading(false)
            }
        }
        loadCatalog()
    }, [])

    const getImageUrl = (imageFilename) => {
        if (!imageFilename) return '';

        return `http://localhost:3001/files/${imageFilename}`;
    };

    if (isLoading) {
        return <p>Carregando livros...</p>
    }

    if (error) {
        return <p>Erro: {error}</p>
    }

    if (books.length === 0) {
        return <p>Nenhum livro encontrado no catálogo.</p>
    }

    return (
        <>
            <Carousel
                opts={{
                    align: 'center',
                }}
                className='container mx-auto'>
                <CarouselContent>
                    {books.map((book) => (
                        <CarouselItem key={book.id} className="md:basis-1/4 lg:basis-1/6">
                            <div className="p-1">
                                <HoverCard>
                                    <HoverCardTrigger>
                                        <Card className={'p-0'}>
                                            <CardContent className="flex items-center justify-center p-0">
                                                <span className="text-3xl font-semibold">

                                                    {book.image ? (
                                                        <img src={getImageUrl(book.image)} alt={book.title} />
                                                    ) : (
                                                        <p>{book.title}</p>
                                                    )}

                                                </span>
                                            </CardContent>
                                        </Card>
                                    </HoverCardTrigger>

                                    <HoverCardContent className={'md:w-150'}>
                                        <h1>{book.title}</h1>
                                        <p>{book.description}</p>
                                        <p>{book.author}</p>
                                        <p>{book.publishedYear}</p>
                                    </HoverCardContent>

                                </HoverCard>

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}