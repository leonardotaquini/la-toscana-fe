"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(4,{
    message: "El usuario ingresado no es válido",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener al menos 8 caracteres",
  }),
});

export function LoginForm() {
  const [viewPassword, setViewPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async(values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
   
    setIsLoading(false);
    form.reset();
    router.push("/dashboard");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-4 flex flex-col shadow "
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuario</FormLabel>
              <FormControl>
                <Input placeholder="usuario123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={viewPassword ? "text" : "password"}
                    placeholder="********"
                    {...field}
                  />
                  <Button
                    variant={"ghost"}
                    type="button"
                    onClick={() => setViewPassword(!viewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    tabIndex={-1}
                  >
                    {viewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end text-sm">
          <Link
            href="/auth/forgot-password"
            className=""
          >
            Olvidé mi contraseña
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {
              isLoading 
                ? (<Loader2 className="mr-2 animate-spin" />) 
                : (<>Ingresar </>)
            }      
          </Button>
        </div>
      </form>
    </Form>
  );
}