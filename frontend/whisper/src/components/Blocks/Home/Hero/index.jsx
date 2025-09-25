import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto pt-32 pb-8">
        <div className="bg-muted grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
            <p>Descubra agora</p>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Whisper: sua biblioteca online
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              Encontre qualquer livro que desejar em um só lugar. Com o Whisper, você tem acesso instantâneo a uma vasta coleção de títulos para explorar, aprender e se inspirar.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button>
                Explorar agora
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline">Saiba mais</Button>
            </div>
          </div>
          <img alt="logotipo-whisper" src={'/whisper-logos/whisper.svg'} className={'dark:hidden block h-full w-full object-cover'} />
          <img alt="logotipo-whisper" src={'/whisper-logos/whisper-claro.svg'} className={'dark:block hidden h-full w-full object-cover'} />
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
