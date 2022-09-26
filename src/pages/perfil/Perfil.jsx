import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import { VerPerfil } from "../../components/verPerfil/VerPerfil";

export const Perfil = () => {
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

      <VerPerfil />
    </>
  );
};
