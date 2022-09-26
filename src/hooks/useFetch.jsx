import React, { useCallback, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [carregando, setCarregando] = useState(null);
  const [erro, setErro] = useState(null);

  const request = useCallback(async (url, more) => {
    try {
      setCarregando(true);
      const resposta = await fetch(url, more);
      const json = await resposta.json();
      setData(json);
    } catch (erro) {
      setErro("Ops, Algo deu errado :()");
    } finally {
      setCarregando(false);
    }
  }, []);

  return { data, carregando, request, erro, setData };
};
