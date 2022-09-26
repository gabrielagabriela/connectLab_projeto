import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import {
  ButtonStyle,
  FormStyle,
  InputStyle,
  LabelStyle,
  SpanForm,
} from "../formCadastro/FormCadastro.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { editProfile, getZipCode } from "../../service/api/Api";
import { useFetch } from "../../hooks/useFetch";
import { useZipCode } from "../../hooks/useZipCode";

const schema = yup
  .object({
    fullName: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Requer um e-mail válido")
      .required("Campo obrigatório"),
    photoUrl: yup.string(),
    phone: yup
      .number()
      .typeError("Apenas números são aceitos")
      .nullable()
      .moreThan(0)
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    password: yup
      .string()
      .min(8, "Mínimo de 8 caracteres")
      .required("Campor obrigatório"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatótio")
      .oneOf([yup.ref("password")], "Digite a mesma senha"),
    zipCode: yup
      .string()
      .matches(/^[0-9]+$/, "Apenas números são aceitos")
      .min(8, "Mínimo de 8 caracteres")
      .max(8, "Máximo de 8 caracteres")
      .required("Campo obrigatório"),
    street: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo Obrigatório"),
    complement: yup.string(),
    number: yup
      .string()
      .matches(/^[0-9]+$/, "Apenas números são aceitos")
      .required("Campo obrigatório"),
    neighborhood: yup.string().required("Campo Obrigatório"),
  })
  .required();

export const FormEditarPerfil = () => {
  const navigate = useNavigate();
  const { token, id } = useContext(UserContext);
  const { requestZipCode, dataZipCode } = useZipCode();

  const { request } = useFetch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function getCep(e) {
    const code = e.target.value.replace(/\D/g, "");
    const { url } = getZipCode(code);
    requestZipCode(url);
  }

  if (dataZipCode) {
    setValue("state", dataZipCode.uf);
    setValue("city", dataZipCode.localidade);
    setValue("street", dataZipCode.logradouro);
    setValue("neighborhood", dataZipCode.bairro);
  }

  function submit(formData) {
    const { url, more } = editProfile(id, token, {
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      photoUrl: formData.photoUrl,
      phone: formData.phone,
      userAddress: {
        zipCode: formData.zipCode,
        street: formData.street,
        number: formData.number,
        neighborhood: formData.neighborhood,
        city: formData.city,
        state: formData.state,
        complement: formData.complement,
      },
    });

    request(url, more);
    navigate("/inicio");
  }

  return (
    <FormStyle onSubmit={handleSubmit(submit)}>
      <LabelStyle>
        Nome Completo*
        <InputStyle type="text" name="fullName" {...register("fullName")} />
        <SpanForm>{errors.fullName?.message}</SpanForm>
      </LabelStyle>
      <LabelStyle>
        E-mail*
        <InputStyle type="text" name="email" {...register("email")} />
        <SpanForm>{errors.email?.message}</SpanForm>
      </LabelStyle>
      <LabelStyle>
        URL foto perfil
        <InputStyle type="text" name="photoUrl" {...register("photoUrl")} />
      </LabelStyle>
      <LabelStyle>
        Telefone
        <InputStyle name="phone" {...register("phone")} />
        <SpanForm>{errors.phone?.message}</SpanForm>
      </LabelStyle>
      <LabelStyle>
        Senha*
        <InputStyle type="password" name="password" {...register("password")} />
        <SpanForm>{errors.password?.message}</SpanForm>
      </LabelStyle>
      <LabelStyle>
        Confirmação de senha*
        <InputStyle type="password" {...register("passwordConfirm")} />
        <SpanForm>{errors.passwordConfirm?.message}</SpanForm>
      </LabelStyle>
      <LabelStyle>
        CEP*
        <InputStyle
          type="text"
          name="zipCode"
          {...register("zipCode", {
            onBlur: (event) => getCep(event),
          })}
        />
        <SpanForm>{errors.zipCode?.message}</SpanForm>
      </LabelStyle>
      <LabelStyle>
        Logradouro*
        <InputStyle type="text" name="street" {...register("street")} />
        <SpanForm>{errors.street?.message}</SpanForm>
      </LabelStyle>
      <LabelStyle>
        Estado*
        <InputStyle type="text" name="state" {...register("state")} />
        <SpanForm>{errors.state?.message}</SpanForm>
      </LabelStyle>
      <LabelStyle>
        Cidade*
        <InputStyle type="text" name="city" {...register("city")} />
        <SpanForm>{errors.city?.message}</SpanForm>
      </LabelStyle>
      <LabelStyle>
        Complemento
        <InputStyle type="text" name="complement" {...register("complement")} />
      </LabelStyle>
      <LabelStyle>
        Número*
        <InputStyle type="text" name="number" {...register("number")} />
        <SpanForm>{errors.number?.message}</SpanForm>
      </LabelStyle>
      <LabelStyle>
        Bairro*
        <InputStyle
          type="text"
          name="neighborhood"
          {...register("neighborhood")}
        />
        <SpanForm>{errors.neighborhood?.message}</SpanForm>
      </LabelStyle>

      <ButtonStyle type="submit">Salvar</ButtonStyle>
    </FormStyle>
  );
};

FormEditarPerfil.propTypes = {};
