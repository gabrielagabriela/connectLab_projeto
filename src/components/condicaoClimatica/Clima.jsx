import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  DivClima,
  H2Clima,
  H3Clima,
  PClima,
  SectionClima,
} from "./Clima.styles";

export const Clima = () => {
  const { token, id } = useContext(UserContext);

  const [dados, setDados] = useState();
  const [cityUser, setCityUser] = useState();

  useEffect(() => {
    fetch("https://connectlab.onrender.com/users/" + id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((r) => r.json())
      .then((userData) => {
        
        setCityUser(userData.userAddress.city);
        return userData;
      });
  }, [id, token]);

  useEffect(() => {
    if (cityUser) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityUser}&units=metric&appid=de217c4634ff9f3ce706e3a1083e28e7&lang=pt_br`,
      )
        .then((response) => response.json())
        .then((json) => {
          setDados(json);
        
          return json;
        });
    }
  }, [cityUser]);

  if (dados)
    return (
      <SectionClima>
        <DivClima>
          <H2Clima>{dados.main.temp} °C</H2Clima>
        </DivClima>
        <DivClima>
          <H3Clima>{dados.name}</H3Clima>
        </DivClima>
        <DivClima className="detalhesTempo">
          <PClima>Sensação Térmica: {dados.main.feels_like} °C -</PClima>
          <PClima>- Umidade: {dados.main.humidity}% -</PClima>
          <PClima>- Agora: {dados.weather[0].description}</PClima>
        </DivClima>
      </SectionClima>
    );
};
