export const fields = [
  {
    name: "firstName",
    label: "First name",
    type: "text",
    placeholder: "Enter your first name",
    autoComplete: "given-name",
  },
  {
    name: "lastName",
    label: "Last name",
    type: "text",
    placeholder: "Enter your last name",
    autoComplete: "family-name",
  },
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
    placeholder: "Create a password (minimum 8 characters)",
    minLength: 8,
    autoComplete: "new-password",
  },
];