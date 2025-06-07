import { Logo } from '@/components/logo/logo';
import {Pizza} from 'lucide-react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid place-items-center h-screen">
      <section className="w-full h-full flex justify-center items-center flex-col">
        <Logo/>
        {children}
      </section>
    </main>
  );
}