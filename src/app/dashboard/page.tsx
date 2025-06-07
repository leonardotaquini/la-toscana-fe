import { SidebarHeader } from "@/components/dashboard/sidebar/sidebar-header";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <SidebarHeader section="Panel de gestión" title="Inicio" />
      <main className=" grid grid-cols-12 gap-4 p-4 place-items-center h-full">
        <div className="hover:animate-pulse hover:text-xl border h-full w-full col-span-12 sm:col-span-4 grid place-items-center rounded">
          Inciar turno
        </div>
        <Link
          href="/articles"
          className="hover:animate-pulse hover:text-xl border h-full w-full col-span-12 sm:col-span-4 grid place-items-center rounded"
        >
          Articulos
        </Link>
        <Link
          href="/sales"
          className="hover:animate-pulse hover:text-xl border h-full w-full col-span-12 sm:col-span-4 grid place-items-center rounded"
        >
          Ventas
        </Link>
        <Link
          href="/customers"
          className="hover:animate-pulse hover:text-xl border h-full w-full col-span-12 sm:col-span-6 grid place-items-center rounded"
        >
          Clientes
        </Link>
        <Link
          href="/deliveries"
          className="hover:animate-pulse hover:text-xl border h-full w-full col-span-12 sm:col-span-6 grid place-items-center rounded"
        >
          Delivery
        </Link>
      </main>
    </>
  );
}
