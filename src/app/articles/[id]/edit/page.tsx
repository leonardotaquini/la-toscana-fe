'use client';
import { useParams } from "next/navigation";
import { SidebarHeader } from "@/components/dashboard/sidebar/sidebar-header";
import { ArticleForm } from "@/components/articles/article-form";
import { useArticles } from "@/hooks/use-articles";

export default function EditArticlePage() {
  const { id } = useParams<{ id: string }>();
  const { articles, updateArticle } = useArticles();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return <p className="p-4">Artículo no encontrado</p>;
  }

  return (
    <>
      <SidebarHeader section="Articulos" title="Editar pizza" />
      <main className="p-4 max-w-lg mx-auto">
        <ArticleForm onSubmit={(data) => updateArticle(article.id, data)} initialData={article} />
      </main>
    </>
  );
}
