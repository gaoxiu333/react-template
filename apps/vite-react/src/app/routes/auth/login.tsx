import { Head } from "@/components/seo/head";
import { LoginForm } from "@/features/auth/components/login-form";
import { useNavigate, useSearchParams } from "react-router";

export default function Page() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const handleSuccess = () => {
    navigate(redirectTo || "/", { replace: true });
  };
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Head title="登录" />
      <div className="w-full max-w-sm">
        <LoginForm onSuccess={handleSuccess} />
      </div>
    </div>
  );
}
