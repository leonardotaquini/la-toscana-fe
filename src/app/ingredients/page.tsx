import { SidebarHeader } from "@/components/dashboard/sidebar/sidebar-header";
import { IngredientTable } from "@/components/ingredients/ingredient-table";

export default function IngredientsPage() {
  return (
    <>
      <SidebarHeader section="Articulos" title="Ingredientes" />
      <main className="p-4">
        <IngredientTable />
      </main>
    </>
  );
}
