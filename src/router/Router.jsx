import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Login } from "../pages/login/Login";
import { Cadastro } from "../pages/cadastro/Cadastro";
import { Inicio } from "../pages/inicio/inicio";
import { Dispositivos } from "../pages/dispositivos/Dispositivos";
import { Perfil } from "../pages/perfil/Perfil";
import { EditarPerfil } from "../pages/perfil/EditarPerfil";
import { UserContext } from "../contexts/UserContext";
import { AdicionaDispositivo } from "../pages/dispositivos/AdicionaDispositivo";
import { DetalheDispositivoSelecionado } from "../pages/inicio/DetalheDispositivoSelecionado";

export const Router = () => {
  // eslint-disable-next-line react/prop-types
  const PrivateRoute = ({ children }) => {
    const { authentic } = useContext(UserContext);

    if (!authentic) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route
        path="inicio"
        element={
          <PrivateRoute>
            <Inicio />
          </PrivateRoute>
        }
      />
      <Route
        path="dispositivos"
        element={
          <PrivateRoute>
            <Dispositivos />
          </PrivateRoute>
        }
      />
      <Route
        path="detalheDispositivoSelecionado"
        element={
          <PrivateRoute>
            <DetalheDispositivoSelecionado />
          </PrivateRoute>
        }
      />
      <Route
        path="perfil"
        element={
          <PrivateRoute>
            <Perfil />
          </PrivateRoute>
        }
      />
      <Route
        path="editarPerfil"
        element={
          <PrivateRoute>
            <EditarPerfil />
          </PrivateRoute>
        }
      />
      <Route
        path="adicionaDispositivo"
        element={
          <PrivateRoute>
            <AdicionaDispositivo />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<p>Página não encontrada</p>} />
    </Routes>
  );
};
