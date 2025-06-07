"use client";
import { SidebarHeader } from "@/components/dashboard/sidebar/sidebar-header";
import { ArticleForm } from "@/components/articles/article-form";
import { useArticles } from "@/hooks/use-articles";

export default function NewArticlePage() {
  const { addArticle } = useArticles();

  return (
    <>
      <SidebarHeader section="Articulos" title="Crear pizza" />
      <main className="p-4 max-w-lg mx-auto">
        <ArticleForm onSubmit={addArticle} />
      </main>
    </>
  );
}
