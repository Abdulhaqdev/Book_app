import React from "react";
import AuthContainer from "../../components/template/AuthContainer";
import coverImg from "../../assets/register-cover-img.png";
import ActionLInk from "../../components/ui/ActionLink";
import Form from "../../components/template/Form";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import useAuth from "../../utils/hooks/useAuth";
import getFormValues from "../../utils/getFormValue";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const { signUp } = useAuth();
  const handleSubmit = async () => {
    const values = getFormValues("register-from");
    const resp = await signUp(values);
    !resp.success && toast.error(resp.message);
  };

  return (
    <AuthContainer img={coverImg}>
      <h2 className="auth-title">Ro'yxatdan o'tish</h2>
      <p className="aut-dec">
        Sizing hisobingiz bormi? <ActionLInk path="/login">kirish</ActionLInk>{" "}
      </p>
      <Form className="auth-form-cantrol register-from" onSubmit={handleSubmit}>
        <TextInput name="first_name" placeholder="Ismingiz" />
        <TextInput name="last_name" placeholder="Familyangiz" />
        <TextInput name="phone_number" placeholder="Telefon raqam" />
        <TextInput name="email" placeholder="Email" />
        <TextInput name="password" placeholder="Parol" />
        <Button type="submit">Keyingi qadam</Button>
      </Form>
      <Toaster position="top-center" reverseOrder={false} />
    </AuthContainer>
  );
}

export default Register;
