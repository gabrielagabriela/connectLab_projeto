import React, { useCallback, useState } from "react";

export const useZipCode = () => {
  const [dataZipCode, setDataZipCode] = useState(null);
  const [carregando, setCarregando] = useState(null);
  const [erroZipCode, setErroZipCode] = useState(null);

  const requestZipCode = useCallback(async (url) => {
    try {
      setCarregando(true);
      const resposta = await fetch(url);
      const json = await resposta.json();
      setDataZipCode(json);
    } catch (erro) {
      setErroZipCode("Ops, Algo deu errado :()");
    } finally {
      setCarregando(false);
    }
  }, []);

  return {
    dataZipCode,
    carregando,
    requestZipCode,
    erroZipCode,
    setDataZipCode,
  };
};
