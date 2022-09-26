import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import { FormLogin } from "../../components/formLogin/FormLogin";

export const Login = () => {
  return (
    <>
      <Header>
        <Link to="/cadastro" className="headerLinks">
          Cadastro
        </Link>
      </Header>
      <FormLogin />
    </>
  );
};
