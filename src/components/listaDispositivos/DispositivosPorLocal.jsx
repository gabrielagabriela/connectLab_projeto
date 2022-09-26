import PropTypes, { func } from "prop-types";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  BotaoListaDispositivo,
  CardListaDispositivo,
  DivListaDispositivoStyle,
  ImgListaDispositivo,
  LiListaDispositivo,
  NomeListaDispositivo,
  PListaDispositivo,
  UlListaDispositivo,
} from "./ListaDispositivos.styles";
import { UserContext } from "../../contexts/UserContext";
import { isOnFetch, userAllDevices2 } from "../../service/api/Api";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// eslint-disable-next-line react/prop-types
export const DispositivosPorLocal = ({ resposta }) => {
  const { id, token } = useContext(UserContext);
  const { request, data, carregando, erro } = useFetch();

  const [deviceFiltro, setDeviceFiltro] = useState();

  const getUserDevices = useCallback(() => {
    const { url, more } = userAllDevices2(id, token);
    request(url, more);
  }, [id, request, token]);

  useEffect(() => {
    getUserDevices();
  }, [getUserDevices]);

  useEffect(() => {
    if (resposta === "Todos") {
      setDeviceFiltro([...data]);
    } else if (resposta === "Casa") {
      setDeviceFiltro(
        data.filter((item) => {
          return item.local.description === "Casa";
        }),
      );
    } else if (resposta === "Escritório") {
      setDeviceFiltro(
        data.filter((item) => {
          return item.local.description === "Escritório";
        }),
      );
    } else if (resposta === "Fábrica") {
      setDeviceFiltro(
        data.filter((item) => {
          return item.local.description === "Fábrica";
        }),
      );
    }
  }, [resposta, data]);

  function setIsOn(item) {
    isOnFetch(item, token).then((r) => {
     
      getUserDevices();
    });
  }

  if (erro) return <p>{erro}</p>;
  if (carregando) return <p>Carregando...</p>;

  return (
    <>
      <DivListaDispositivoStyle>
        <UlListaDispositivo>
          {deviceFiltro &&
            deviceFiltro.map((item) => {
              return (
                <LiListaDispositivo key={item._id}>
                  <CardListaDispositivo>
                    <ImgListaDispositivo src={item.device.photoUrl} />
                    <NomeListaDispositivo>
                      {item.device.name}
                    </NomeListaDispositivo>
                    <PListaDispositivo>
                      Local : {item.local.description}
                    </PListaDispositivo>
                    <PListaDispositivo>Cômodo: {item.room}</PListaDispositivo>
                    <PListaDispositivo>
                      {item.is_on ? "ON" : "OFF"}
                    </PListaDispositivo>
                    <BotaoListaDispositivo onClick={() => setIsOn(item._id)}>
                      ON/OFF
                    </BotaoListaDispositivo>

                    <Link
                      className="linkLocal"
                      to="/detalheDispositivoSelecionado"
                      state={{ id: item._id }}
                    >
                      Detalhes
                    </Link>
                  </CardListaDispositivo>
                </LiListaDispositivo>
              );
            })}
        </UlListaDispositivo>
      </DivListaDispositivoStyle>
    </>
  );
};
