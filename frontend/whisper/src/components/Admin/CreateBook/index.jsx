"use client"

import { handleCreate } from "@/api/api"
import { useActionState, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/DatePicker"
import { toast } from "sonner"

export function CreateBookModal() {
    const initialState = {
        status: null,
        success: null,
        error: null
    }

    const [state, formAction] = useActionState(handleCreate, initialState)
    const [open, setOpen] = useState(false)
    const [genre, setGenre] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        if (state.status === 'success') {
            toast.success(state.success)

        } else if (state.status === 'error') {
            toast.error(state.error)
        }
    }, [state])

    const handleDateChange = (date) => {
        if (date && date.toISOString) {
            setDate(date.toISOString().split('T')[0]);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className='aspect-video' asChild>
                <Button variant="create" className={'size-full text-2xl font-bold border-3'} onClick={() => setOpen(true)}>Adicionar livro</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form action={formAction}>
                    <DialogHeader>
                        <DialogTitle>Adicionar um título</DialogTitle>
                        <DialogDescription>
                            Coloque todas as informações necessárias para adicionar este título.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="title">Título</Label>
                            <Input id="title" name="title" placeholder="O Fantasma da Ópera" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="author">Autor</Label>
                            <Input id="author" name="author" placeholder="Gaston Leroux" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description">Descrição</Label>
                            <Textarea id="description" name="description" placeholder="Descrição do novo título" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="image">Capa</Label>
                            <Input type={'file'} id="image" name="image" />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="genre">Gênero</Label>
                            <Select onValueChange={setGenre} value={genre} >
                                <SelectTrigger className={'w-full'}>
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent className={'h-60'}>
                                    <SelectItem value="fantasia">Fantasia</SelectItem>
                                    <SelectItem value="ficcao-cientifica">Ficção Científica</SelectItem>
                                    <SelectItem value="romance">Romance</SelectItem>
                                    <SelectItem value="terror">Terror</SelectItem>
                                    <SelectItem value="suspense">Suspense</SelectItem>
                                    <SelectItem value="drama">Drama</SelectItem>
                                    <SelectItem value="aventura">Aventura</SelectItem>
                                    <SelectItem value="misterio">Mistério</SelectItem>
                                    <SelectItem value="biografia">Biografia</SelectItem>
                                    <SelectItem value="historico">Histórico</SelectItem>
                                    <SelectItem value="autoajuda">Autoajuda</SelectItem>
                                    <SelectItem value="humor">Humor</SelectItem>
                                    <SelectItem value="poesia">Poesia</SelectItem>
                                    <SelectItem value="infantil">Infantil</SelectItem>
                                    <SelectItem value="jovem-adulto">Jovem Adulto</SelectItem>
                                    <SelectItem value="distopia">Distopia</SelectItem>
                                    <SelectItem value="classico">Clássico</SelectItem>
                                    <SelectItem value="religioso">Religioso</SelectItem>
                                    <SelectItem value="tecnico">Técnico</SelectItem>
                                </SelectContent>
                            </Select>
                            <input type="hidden" name="genre" id="genre" value={genre} />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="publishedYear">Data de lançamento</Label>
                            <DatePicker onSelect={handleDateChange} />
                            <input type="hidden" name="publishedYear" value={date} />
                        </div>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" onClick={() => setOpen(false)} >Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Criar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
