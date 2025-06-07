import { useLocalStorage } from './use-local-storage';

export interface Ingredient {
  id: number;
  name: string;
}

export function useIngredients() {
  const [ingredients, setIngredients] = useLocalStorage<Ingredient[]>('ingredients', []);

  const addIngredient = (data: Omit<Ingredient, 'id'>) => {
    setIngredients([...ingredients, { ...data, id: Date.now() }]);
  };

  const updateIngredient = (id: number, data: Omit<Ingredient, 'id'>) => {
    setIngredients(ingredients.map((i) => (i.id === id ? { ...i, ...data, id } : i)));
  };

  const deleteIngredient = (id: number) => {
    setIngredients(ingredients.filter((i) => i.id !== id));
  };

  return { ingredients, addIngredient, updateIngredient, deleteIngredient };
}
