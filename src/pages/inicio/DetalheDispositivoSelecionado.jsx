import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import { DetalheDispositivoUsuario } from "../../components/listaDispositivos/DetalheDispositivoUsuario";

export const DetalheDispositivoSelecionado = () => {
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

      <DetalheDispositivoUsuario />
    </>
  );
};
