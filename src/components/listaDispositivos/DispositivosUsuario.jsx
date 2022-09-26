import { useState } from "react";
import { BotaoEscolheLocal, DivEscolheLocal } from "./ListaDispositivos.styles";

import { DispositivosPorLocal } from "./DispositivosPorLocal";

export const DispositivosUsuario = () => {
  const [resposta, setResposta] = useState();

  return (
    <>
      <DivEscolheLocal>
        <BotaoEscolheLocal onClick={() => setResposta("Todos")}>
          Todos
        </BotaoEscolheLocal>
        <BotaoEscolheLocal onClick={() => setResposta("Casa")}>
          Casa
        </BotaoEscolheLocal>
        <BotaoEscolheLocal onClick={() => setResposta("Escritório")}>
          Escritório
        </BotaoEscolheLocal>
        <BotaoEscolheLocal onClick={() => setResposta("Fábrica")}>
          Fábrica
        </BotaoEscolheLocal>
      </DivEscolheLocal>

      <DispositivosPorLocal resposta={resposta} />
    </>
  );
};
