import AuthForm from '@/components/authForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-100">
      <AuthForm type="signup" />
    </div>
  );
}
