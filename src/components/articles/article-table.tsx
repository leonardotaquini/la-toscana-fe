'use client';
import Link from 'next/link';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useArticles } from '@/hooks/use-articles';
import { useIngredients } from '@/hooks/use-ingredients';

export function ArticleTable() {
  const { articles, deleteArticle } = useArticles();
  const { ingredients } = useIngredients();

  const ingredientName = (id: number) => ingredients.find(i => i.id === id)?.name || '';

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button asChild>
          <Link href="/articles/new">Crear pizza</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Ingredientes</TableHead>
            <TableHead className="w-28" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell>{article.name}</TableCell>
              <TableCell>${article.price.toFixed(2)}</TableCell>
              <TableCell>{article.ingredients.map(ingredientName).join(', ')}</TableCell>
              <TableCell className="flex gap-2">
                <Button size="sm" asChild variant="outline">
                  <Link href={`/articles/${article.id}/edit`}>Editar</Link>
                </Button>
                <Button size="sm" variant="destructive" onClick={() => deleteArticle(article.id)}>
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
