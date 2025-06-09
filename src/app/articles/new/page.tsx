"use client";
import { SidebarHeader } from "@/components/dashboard/sidebar/sidebar-header";
import { ArticleForm } from "@/components/articles/article-form";
import { useArticles } from "@/hooks/use-articles";
import { Pizza } from "lucide-react";

export default function NewArticlePage() {
  const { addArticle } = useArticles();

  return (
    <>
      <SidebarHeader section="Articulos" title="Crear pizza" />
      <main className="p-4 grid place-items-center h-full">
        <section className="border p-6 rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center flex justify-center items-center gap-4">Crear nueva pizza <Pizza className="animate-bounce"/></h1>
          <ArticleForm onSubmit={addArticle} />
        </section>
      </main>
    </>
  );
}
