import React from "react";
import AuthContainer from "../../components/template/AuthContainer";
import ActionLInk from "../../components/ui/ActionLink";
import coverImg from "../../assets/login-cover-img.png";
import Form from "../../components/template/Form";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import useAuth from "../../utils/hooks/useAuth";
import getFormValues from "../../utils/getFormValue";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const { signIn } = useAuth();

  const handlesubmit = async () => {
    const values = getFormValues("login-form");
    const resp = await signIn(values);
    !resp.success && toast.error(resp.message);
  };
  return (
    <AuthContainer img={coverImg}>
      <h2 className="auth-title">Kirish</h2>
      <p className="aut-dec">
        Sizing hisobingiz yoqmi?{" "}
        <ActionLInk path="/register">Ro'yxatdan o'tish</ActionLInk>{" "}
      </p>
      <Form className="auth-form-cantrol login-form" onSubmit={handlesubmit}>
        <TextInput name="email" placeholder="Email" />
        <TextInput name="password" placeholder="Parol" />
        <Button type="submit">Kirish</Button>
      </Form>
      <Toaster position="top-center" reverseOrder={false} />
    </AuthContainer>
  );
}

export default Login;
