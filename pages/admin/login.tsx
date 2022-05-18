import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Input from "../../components/Input";

type FormProps = {
  password: string;
};

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push("/admin");
    } else {
      console.log(response.json());
    }
  });

  return (
    <Container>
      <Card>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <p className="mb-4">Demo password: demo</p>
        <form onSubmit={onSubmit}>
          <Input
            label="Password"
            type="password"
            register={{ ...register("password", { required: true }) }}
            error={errors?.password}
          />
          <Button type="submit" fullWidth>
            Login
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
