"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/dashboard/sidebar/nav-main";
import { NavProjects } from "@/components/dashboard/sidebar/nav-projects";
import { NavSecondary } from "@/components/dashboard/sidebar/nav-secondary";
import { NavUser } from "@/components/dashboard/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Logo } from "@/components/logo/logo";

const data = {
  user: {
    name: "Iron",
    email: "ironvera",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Administrar",
      url: "#",
      icon: SquareTerminal,
      isActive: false,

    },
    {
      title: "Crear pizza",
      url: "#",
      icon: Bot,

    },
    {
      title: "Agregar ingrediente",
      url: "#",
      icon: BookOpen,

    },

  ],
  navMainVentas:[
    {
      title: "Administrar",
      url: "#",
      icon: SquareTerminal,
      isActive: false,

    },
    {
      title: "Crear venta",
      url: "#",
      icon: Frame,

    },
  ],
  navMainClientes:[
    {
      title: "Administrar",
      url: "#",
      icon: SquareTerminal,
      isActive: false,

    },
    {
      title: "Crear cliente",
      url: "#",
      icon: LifeBuoy,

    },
  ],
  navMainDelivery:[
    {
      title: "Administrar",
      url: "#",
      icon: SquareTerminal,
      isActive: false,

    },
    {
      title: "Crear delivery",
      url: "#",
      icon: SquareTerminal,
      isActive: false,

    },
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild >
              <Link href="/">
                <Logo className="text-xl mx-auto" size={18}/>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} title="Articulos" />
        <NavMain items={data.navMainVentas} title="Ventas" />
        <NavMain items={data.navMainClientes} title="Clientes" />
        <NavMain items={data.navMainDelivery} title="Delivery" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
