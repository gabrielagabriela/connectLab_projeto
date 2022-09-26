import PropTypes, { func } from "prop-types";
import { useContext, useEffect } from "react";
import {
  CardListaDispositivo,
  DivListaDispositivoStyle,
  H1Dispositivo,
  ImgListaDispositivo,
  LiListaDispositivo,
  NomeListaDispositivo,
  SectionDispositivos,
  UlListaDispositivo,
} from "./ListaDispositivos.styles";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { getDevice } from "../../service/api/Api";

export const ListaTodosDispositivos = () => {
  const { token } = useContext(UserContext);

  const { request, data, carregando, erro } = useFetch();

  useEffect(() => {
    const { url, more } = getDevice(token);
    request(url, more);
  }, [request, token]);

  if (erro) return <p>{erro}</p>;
  if (carregando) return <p>Carregando</p>;
  if (data)
    return (
      <>
        <SectionDispositivos>
          <H1Dispositivo>Dispositivos Disponíveis </H1Dispositivo>
          <DivListaDispositivoStyle>
            <UlListaDispositivo>
              {data.map((item) => {
                return (
                  <LiListaDispositivo key={item._id}>
                    <CardListaDispositivo>
                      <ImgListaDispositivo src={item.photoUrl} />
                      <NomeListaDispositivo>{item.name}</NomeListaDispositivo>
                      <Link
                        className="adicionaDispositivo"
                        to="/adicionaDispositivo"
                        state={{ nome: item.name, id: item._id }}
                      >
                        Adicionar
                      </Link>
                    </CardListaDispositivo>
                  </LiListaDispositivo>
                );
              })}
            </UlListaDispositivo>
          </DivListaDispositivoStyle>
        </SectionDispositivos>
      </>
    );
  else return null;
};

ListaTodosDispositivos.propTypes = {};
