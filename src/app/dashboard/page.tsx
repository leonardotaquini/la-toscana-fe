import { SidebarHeader } from "@/components/dashboard/sidebar/sidebar-header";
import { ShiftTimer } from "@/components/dashboard/shift-timer";
import Link from "next/link";
import { DashboardCard } from "@/components/dashboard/card/dashboard-card";

export default function Page() {

  const items = [
    { title: "Pedidos", url: "/orders" },
    { title: "Pizzas", url: "/articles" },
    { title: "Clientes", url: "/customers" },
    { title: "Delivery", url: "/deliveries" },
    { title: "Ventas", url: "/sales" },]

  return (
    <>
      <SidebarHeader section="Panel de gestión" title="Inicio" />
      <main className=" grid grid-cols-12 gap-4 p-4 place-items-center h-full">
        <ShiftTimer />
        
        {items.map((item) => (
          <DashboardCard
            key={item.title}
            title={item.title}
            to={item.url}/>
        ))}
      </main>
    </>
  );
}
