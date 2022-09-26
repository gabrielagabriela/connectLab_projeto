import { Link } from "react-router-dom";
import { FormCadastro } from "../../components/formCadastro/FormCadastro";
import { Header } from "../../components/header/Header";

export const Cadastro = () => {
  return (
    <>
      <Header>
        <Link to="/" className="headerLinks">
          Login
        </Link>
      </Header>
      <FormCadastro />
    </>
  );
};
