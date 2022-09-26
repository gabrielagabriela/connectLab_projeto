import { useContext } from "react";
import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";

import { DispositivosUsuario } from "../../components/listaDispositivos/DispositivosUsuario";
import { Clima } from "../../components/condicaoClimatica/Clima";
import { PInicio } from "../../components/listaDispositivos/ListaDispositivos.styles";

export const Inicio = () => {
  return (
    <>
      <Header>
        <Link to="/inicio" className="headerLinks">
          Inicio
        </Link>
        <Link to="/dispositivos" className="headerLinks">
          Dispositivos
        </Link>
        <Link to="/perfil" className="headerLinks">
          Perfil
        </Link>
      </Header>

      <Clima />
      <PInicio>Clique em um dos botões para ver seus dispositivos**</PInicio>
      <DispositivosUsuario />
    </>
  );
};
