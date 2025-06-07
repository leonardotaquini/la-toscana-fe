'use client';
import Link from 'next/link';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useIngredients } from '@/hooks/use-ingredients';

export function IngredientTable() {
  const { ingredients, deleteIngredient } = useIngredients();

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button asChild>
          <Link href="/ingredients/new">Crear ingrediente</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead className="w-28" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {ingredients.map((ing) => (
            <TableRow key={ing.id}>
              <TableCell>{ing.name}</TableCell>
              <TableCell className="flex gap-2">
                <Button size="sm" asChild variant="outline">
                  <Link href={`/ingredients/${ing.id}/edit`}>Editar</Link>
                </Button>
                <Button size="sm" variant="destructive" onClick={() => deleteIngredient(ing.id)}>
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
