'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useIngredients } from '@/hooks/use-ingredients';
import { Article } from '@/hooks/use-articles';

const schema = z.object({
  name: z.string().min(1, 'Nombre requerido'),
  price: z.coerce.number().nonnegative({ message: 'Precio inválido' }),
  ingredients: z.array(z.number()).optional().default([]),
});

export function ArticleForm({
  initialData,
  onSubmit,
}: {
  initialData?: Article;
  onSubmit: (data: Omit<Article, 'id'>) => void;
}) {
  const { ingredients } = useIngredients();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: initialData ?? { name: '', price: 0, ingredients: [] },
  });

  const handleSubmit = (values: z.infer<typeof schema>) => {
    onSubmit(values);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <FormLabel>Ingredientes</FormLabel>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {ingredients.map((ing) => (
              <FormField
                key={ing.id}
                control={form.control}
                name="ingredients"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(ing.id)}
                        onCheckedChange={(checked) => {
                          const ids = field.value || [];
                          if (checked) {
                            field.onChange([...ids, ing.id]);
                          } else {
                            field.onChange(ids.filter((id) => id !== ing.id));
                          }
                        }}
                      />
                    </FormControl>
                    <FormLabel className="!mb-0 cursor-pointer" htmlFor={undefined}>{ing.name}</FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>
        <Button type="submit" className="w-full">
          Guardar
        </Button>
      </form>
    </Form>
  );
}
