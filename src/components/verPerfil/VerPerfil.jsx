import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import {
  BotaoLogout,
  DivVerPerfilStyle,
  H1VerPerfil,
  H2VerPerfil,
  ImgVerPerfil,
  ParagrafoVerPerfil,
} from "./VerPerfil.styles";
import { seeUserProfile } from "../../service/api/Api";
import { useFetch } from "../../hooks/useFetch";
import foto from "../../assets/fotoprofile.jpg";

export const VerPerfil = () => {
  const navigate = useNavigate();
  const { setUserData, token, setToken, setDevices, setId, id } =
    useContext(UserContext);
  const { request, data, carregando, erro } = useFetch();

  function handleLogout() {
    setUserData(null);
    setToken(null);
    setDevices(null);
    setId(null);
    navigate("/");
  }

  useEffect(() => {
    const { url, more } = seeUserProfile(id, token);
    request(url, more);
  }, [request, id, token]);

  if (erro) return <p>{erro}</p>;
  if (carregando) return <p>Carregando...</p>;
  if (data)
    return (
      <DivVerPerfilStyle>
        <H1VerPerfil>Meu Perfil</H1VerPerfil>
        {data.photoUrl ? (
          <ImgVerPerfil src={data.photoUrl} />
        ) : (
          <ImgVerPerfil src={foto} />
        )}
        <H2VerPerfil>{data.fullName}</H2VerPerfil>
        <ParagrafoVerPerfil>Email: {data.email}</ParagrafoVerPerfil>
        {data.phone && (
          <ParagrafoVerPerfil>Phone: {data.phone}</ParagrafoVerPerfil>
        )}
        <H2VerPerfil>Endereço</H2VerPerfil>
        <ParagrafoVerPerfil>Cep: {data.userAddress.zipCode}</ParagrafoVerPerfil>
        <ParagrafoVerPerfil>
          Logradouro: {data.userAddress.street}
        </ParagrafoVerPerfil>
        <ParagrafoVerPerfil>
          Número: {data.userAddress.number}
        </ParagrafoVerPerfil>
        <ParagrafoVerPerfil>
          Complemento: {data.userAddress.complement}
        </ParagrafoVerPerfil>
        <ParagrafoVerPerfil>
          Bairro: {data.userAddress.neighborhood}
        </ParagrafoVerPerfil>
        <ParagrafoVerPerfil>Cidade: {data.userAddress.city}</ParagrafoVerPerfil>
        <ParagrafoVerPerfil>
          Estado: {data.userAddress.state}
        </ParagrafoVerPerfil>
        <Link to="/editarPerfil" className="logoutVerPerfil">
          Editar
        </Link>

        <BotaoLogout onClick={handleLogout}>Sair</BotaoLogout>
      </DivVerPerfilStyle>
    );
};

VerPerfil.propTypes = {};

//

//  <ImgVerPerfil src={fotoProfile} />
