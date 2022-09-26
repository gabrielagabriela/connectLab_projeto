import PropTypes from "prop-types";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ButtonLoginStyle,
  FormLoginStyle,
  H1Login,
  InputLoginStyle,
  LabelLoginStyle,
  SpanLoginForm,
} from "./FormLogin.styles";
import { UserContext } from "../../contexts/UserContext";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Requer um e-mail válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(5, "Mínimo de 5 caracteres")
      .required("Campor obrigatório"),
  })
  .required();

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { logInto } = useContext(UserContext);

  async function loginSubmit(dataLogin) {
    logInto(dataLogin.email, dataLogin.password);
  }

  return (
    <FormLoginStyle onSubmit={handleSubmit(loginSubmit)}>
      <H1Login>Acessar</H1Login>
      <LabelLoginStyle>
        E-mail
        <InputLoginStyle {...register("email")} />
        <SpanLoginForm>{errors.email?.message}</SpanLoginForm>
      </LabelLoginStyle>

      <LabelLoginStyle>
        Senha
        <InputLoginStyle type="password" {...register("password")} />
        <SpanLoginForm>{errors.password?.message}</SpanLoginForm>
      </LabelLoginStyle>

      <ButtonLoginStyle type="submit">LOGIN</ButtonLoginStyle>
    </FormLoginStyle>
  );
};

FormLogin.propTypes = {};
