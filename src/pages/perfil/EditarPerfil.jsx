import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import { FormEditarPerfil } from "../../components/editarPerfil/FormEditarPerfil";

export const EditarPerfil = () => {
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
      <h1>Editar Perfil</h1>
      <FormEditarPerfil />
    </>
  );
};
