
import Input from "../../components/Input";

// const fields = [
//   {
//     name: "firstName",
//     label: "First name",
//     type: "text",
//     placeholder: "Enter your first name",
//     autoComplete: "given-name",
//   },
//   {
//     name: "lastName",
//     label: "Last name",
//     type: "text",
//     placeholder: "Enter your last name",
//     autoComplete: "family-name",
//   },
//   {
//     name: "email",
//     label: "Email address",
//     type: "email",
//     placeholder: "Enter your email address",
//     autoComplete: "email",
//   },
//   {
//     name: "password",
//     label: "Password",
//     type: "password",
//     placeholder: "Create a password (minimum 8 characters)",
//     minLength: 8,
//     autoComplete: "new-password",
//   },
// ];

import { fields } from "@/api/fields";

import {course} from "@/api/Courses";

console.log(course);


export default function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Register:", data);
    alert("Registration form submitted!");
  };

  return (
    <Input
      title="Create your account"
      subtitle="Welcome! Fill in your details to get started."
      fields={fields}
      buttonText="Create Account"
      footerText="Already have an account?"
      linkText="Sign in"
      linkTo="/login"
      onSubmit={handleRegister}
    />
  );
}
