import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { saveDeviceUser } from "../../service/api/Api";
import { useFetch } from "../../hooks/useFetch";
import {
  ButtonStyle,
  FormStyle,
  H1Cadastro,
  InputStyle,
  LabelStyle,
  OptionComodo,
  SectionDispositivoSelecionado,
  SelectLocal,
} from "../formCadastro/FormCadastro.styles";

export const FormAdicionaDispositivo = () => {
  const { request } = useFetch();

  const { local, token, id } = useContext(UserContext);

  const location = useLocation();
  const navigate = useNavigate();

  const nome = location.state.nome;
  const idDevice = location.state.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  function submit(formData) {
    const { url, more } = saveDeviceUser(token, {
      user: id,
      device: idDevice,
      is_on: true,
      local: formData.local,
      room: formData.comodo,
    });

    request(url, more);
    navigate("/dispositivos");
  }

  return (
    <>
      <SectionDispositivoSelecionado>
        <FormStyle onSubmit={handleSubmit(submit)}>
          <H1Cadastro>{nome}</H1Cadastro>
          <LabelStyle>
            Local*
            <SelectLocal {...register("local")}>
              <OptionComodo value={local[0]._id}>Casa</OptionComodo>
              <OptionComodo value={local[1]._id}>Escritório</OptionComodo>
              <OptionComodo value={local[2]._id}>Fábrica</OptionComodo>
            </SelectLocal>
          </LabelStyle>
          <LabelStyle>
            Cômodo*
            <InputStyle {...register("comodo")} />
          </LabelStyle>
          <ButtonStyle type="submit">Confirmar</ButtonStyle>
        </FormStyle>
        <Link className="cancelarAdiciona" to="/dispositivos">
          Cancelar
        </Link>
      </SectionDispositivoSelecionado>
    </>
  );
};
