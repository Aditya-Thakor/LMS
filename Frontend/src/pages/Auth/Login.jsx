import Input from "../../components/Input";

export default function Login() {
  //email,password;

  return (
    <div>
      <Input
        label={"email"}
        type={"email"}
        name={"email"}
        value={""}
        onChange={() => {}}
        placeholder='enter your email'
      />
    </div>
  );
}
