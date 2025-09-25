import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

const footerLinks = [
  {
    title: "Visão Geral",
    href: "#",
  },
  {
    title: "Recursos",
    href: "#",
  },
  {
    title: "Preços",
    href: "#",
  },
  {
    title: "Carreiras",
    href: "#",
  },
  {
    title: "Ajuda",
    href: "#",
  },
  {
    title: "Privacidade",
    href: "#",
  },
];

export default function Footer() {
  return (
    <div className=" flex flex-col">
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-3 flex justify-around items-center">
            {/* Logo */}
            <Logo />

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link href={href} className="text-muted-foreground hover:text-foreground">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div
            className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank" className="italic font-bold hover:underline">
                Whisper
              </Link>
              . Todos os direitos reservados.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};