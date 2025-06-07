import { SidebarHeader } from "@/components/dashboard/sidebar/sidebar-header";
import { ArticleTable } from "@/components/articles/article-table";

export default function ArticlesPage() {
  return (
    <>
      <SidebarHeader section="Articulos" title="Pizzas" />
      <main className="p-4">
        <ArticleTable />
      </main>
    </>
  );
}
