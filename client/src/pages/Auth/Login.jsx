
import AuthForm from "../../components/AuthForm";

const fields = [
  {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "Enter your email address",
    autoComplete: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    autoComplete: "current-password",
  },
];

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Login:", data);
    alert("Login form submitted!");
  };

  return (
    <AuthForm
      title="Sign in to LMS"
      subtitle="Welcome back! Please sign in to continue."
      fields={fields}
      buttonText="Continue"
      footerText="Don't have an account?"
      linkText="Sign up"
      linkTo="/register"
      onSubmit={handleLogin}
    />
  );
}
