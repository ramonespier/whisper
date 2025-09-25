import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const defaultItems = [
    "Todos os títulos que você procura",
    "Pronta entrega ou retirada",
    "Biblioteca online fácil de usar",
    "Atualizações frequentes",
    "Atendimento dedicado",
];

const CTA = ({
    title = "Descubra o Whisper",
    description,
    buttonText = "Acesse agora",
    buttonUrl = "https://whisper.com.br",
    items = defaultItems,
}) => {
    return (
        <section className="py-24">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="max-w-5xl">
                        <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
                            <div className="md:w-1/2">
                                <h4 className="mb-1 text-2xl font-bold md:text-3xl">{title}</h4>
                                <p className="text-muted-foreground font-semibold">
                                    Acesse agora o Whisper, a biblioteca online com todos os títulos que você deseja, prontos para entrega ou retirada. Seu próximo livro está a um clique!
                                </p>
                                <Button className="mt-6" asChild>
                                    <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
                                        {buttonText} <ArrowRight className="size-4" />
                                    </a>
                                </Button>
                            </div>
                            <div className="md:w-1/3">
                                <ul className="flex flex-col space-y-2 text-sm font-medium">
                                    {items.map((item, idx) => (
                                        <li className="flex items-center" key={idx}>
                                            <Check className="mr-4 size-4 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { CTA };
