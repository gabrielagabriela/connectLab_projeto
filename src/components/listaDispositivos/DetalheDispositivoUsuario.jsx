import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useFetch } from "../../hooks/useFetch";
import { getUserDevice, deleteDevice } from "../../service/api/Api";
import {
  BotaoListaDispositivo,
  CardDispositivoSelecionado,
  CardListaDispositivo,
  H3ListaDispositivo,
  ImgListaDispositivo,
  NomeListaDispositivo,
  PListaDispositivo,
} from "./ListaDispositivos.styles";

export const DetalheDispositivoUsuario = () => {
  const { request, data, carregando, erro } = useFetch();
  const navigate = useNavigate();
  const location = useLocation();

  const idDevice = location.state.id;

  const { token } = useContext(UserContext);

  useEffect(() => {
    const { url, more } = getUserDevice(idDevice, token);
    request(url, more);
  }, [request, token, idDevice]);

  function handleClick() {
    const { url, more } = deleteDevice(idDevice, token);
    request(url, more);
    navigate("/inicio");
  }

  if (erro) return <p>{erro}</p>;
  if (carregando) return <p>Aguarde...</p>;
  if (data)
    return (
      <CardDispositivoSelecionado>
        <NomeListaDispositivo>{data.device.name}</NomeListaDispositivo>
        <PListaDispositivo>{data.device.madeBy}</PListaDispositivo>
        <ImgListaDispositivo src={data.device.photoUrl} />
        <PListaDispositivo>
          {data.is_on ? "Dispositivo Ligado" : "Dispositivo Desligado"}
        </PListaDispositivo>
        <H3ListaDispositivo>Informações do Dispositivo</H3ListaDispositivo>
        <PListaDispositivo>
          ID virtual: {data.device.info.virtual_id}
        </PListaDispositivo>
        <PListaDispositivo>
          Endereço IP: {data.device.info.ip_address}
        </PListaDispositivo>
        <PListaDispositivo>
          Endereço MAC: {data.device.info.mac_address}
        </PListaDispositivo>
        <PListaDispositivo>
          Força de Sinal: {data.device.info.signal}
        </PListaDispositivo>
        <BotaoListaDispositivo onClick={handleClick}>
          Remover
        </BotaoListaDispositivo>
      </CardDispositivoSelecionado>
    );
};
