import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <section className="grid place-items-center">
        <h1 className="text-2xl">Pagina no encontrada</h1>
        <Button asChild className="mt-4">
          <Link href="/dashboard">
            <ArrowLeft />
            Regresar al dashboard
          </Link>
        </Button>
      </section>
    </main>
  );
}
