import { LoginForm } from "@/components/auth/login-form";

export default async function AuthPage() {
  return (
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
  );
}