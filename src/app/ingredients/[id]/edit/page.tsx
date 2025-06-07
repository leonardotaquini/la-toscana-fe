'use client';
import { useParams } from "next/navigation";
import { SidebarHeader } from "@/components/dashboard/sidebar/sidebar-header";
import { IngredientForm } from "@/components/ingredients/ingredient-form";
import { useIngredients } from "@/hooks/use-ingredients";

export default function EditIngredientPage() {
  const { id } = useParams<{ id: string }>();
  const { ingredients, updateIngredient } = useIngredients();
  const ingredient = ingredients.find((i) => i.id === Number(id));

  if (!ingredient) {
    return <p className="p-4">Ingrediente no encontrado</p>;
  }

  return (
    <>
      <SidebarHeader section="Articulos" title="Editar ingrediente" />
      <main className="p-4 max-w-lg mx-auto">
        <IngredientForm onSubmit={(data) => updateIngredient(ingredient.id, data)} initialData={ingredient} />
      </main>
    </>
  );
}
