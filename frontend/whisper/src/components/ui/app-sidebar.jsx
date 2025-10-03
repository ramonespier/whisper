"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  LibraryBig
} from "lucide-react"

import { NavMain } from "@/components/ui/nav-main"
import { NavUser } from "@/components/ui/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "./button"
import { AdmTheme } from "../Admin/AdmTheme"

// This is sample data.
const data = {
  user: {
    name: "whisper",
    email: "whisper@gmail.com",
    avatar: "/whisper-logos/whisper-claro.svg",
  },
  
  navMain: [
    {
      title: "Catálogo",
      url: "#",
      icon: LibraryBig,
      isActive: true,
      items: [
        {
          title: "Ver livros",
          url: "admin/livros",
        },
        {
          title: "Remover livro",
          url: "#",
        },
        {
          title: "Editar livro",
          url: "#",
        },
        {
          title: "Estoque",
          url: "#",
        },
        {
          title: "Mostrar catálogo",
          url: "#",
        },
      ],
    },
    {
      title: "Usuários",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Empréstimos",
          url: "#",
        },
        {
          title: "Cobranças",
          url: "#",
        },
        {
          title: "Reservas",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain}/>
      </SidebarContent>
      <SidebarFooter>
        <Button asChild className="p-0 rounded-full">
          <div>
            <AdmTheme />
          </div>
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
