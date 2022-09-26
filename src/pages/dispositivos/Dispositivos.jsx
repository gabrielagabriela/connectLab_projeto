import React from "react";
import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";

import { ListaTodosDispositivos } from "../../components/listaDispositivos/ListaTodosDispositivos";

export const Dispositivos = () => {
  return (
    <>
      <Header>
        <Link to="/inicio" className="headerLinks">
          Inicio
        </Link>
        <Link to="/dispositivos" className="headerLinks">
          Dispositivo
        </Link>
        <Link to="/perfil" className="headerLinks">
          Perfil
        </Link>
      </Header>

      <ListaTodosDispositivos />
    </>
  );
};
