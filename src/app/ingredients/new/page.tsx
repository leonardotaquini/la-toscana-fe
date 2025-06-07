"use client";
import { SidebarHeader } from "@/components/dashboard/sidebar/sidebar-header";
import { IngredientForm } from "@/components/ingredients/ingredient-form";
import { useIngredients } from "@/hooks/use-ingredients";

export default function NewIngredientPage() {
  const { addIngredient } = useIngredients();
  return (
    <>
      <SidebarHeader section="Articulos" title="Crear ingrediente" />
      <main className="p-4 max-w-lg mx-auto">
        <IngredientForm onSubmit={addIngredient} />
      </main>
    </>
  );
}
