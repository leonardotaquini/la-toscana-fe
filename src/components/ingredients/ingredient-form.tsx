'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Ingredient } from '@/hooks/use-ingredients';

const schema = z.object({
  name: z.string().min(1, 'Nombre requerido'),
});

export function IngredientForm({
  initialData,
  onSubmit,
}: {
  initialData?: Ingredient;
  onSubmit: (data: Omit<Ingredient, 'id'>) => void;
}) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: initialData ?? { name: '' },
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
        <Button type="submit" className="w-full">
          Guardar
        </Button>
      </form>
    </Form>
  );
}
