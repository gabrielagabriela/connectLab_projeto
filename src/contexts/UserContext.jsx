import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import {
  loginIntoFetch,
  getUserFetch,
  getLocalFetch,
} from "../service/api/Api";
export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserStorage = ({ children }) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);
  const [devices, setDevices] = useState(null);
  const [id, setId] = useState(null);
  const [local, setLocal] = useState(null);

  async function getLocal(token) {
    const localInfo = await getLocalFetch(token);

    const locals = await localInfo.json();
    setLocal(locals);
  }

  async function getUser(token, id) {
    const getUserInfo = await getUserFetch(token, id);
    const datas = await getUserInfo.json();

    setUserData(datas);

    setId(datas._id);
    getLocal(token);
    navigate("/inicio");
  }

  function errorLogin() {
    navigate("/inicio");
    toast.error("Email ou senha inválida, tente novamente!");
  }

  async function logInto(email, password) {
    try {
      const tokenInfo = await loginIntoFetch(email, password);
      const datas = await tokenInfo.json();
      setToken(datas.token);
      getUser(datas.token, datas.user._id);
    } catch (error) {
      errorLogin();
    }
  }

  return (
    <UserContext.Provider
      value={{
        authentic: !!id,
        logInto,
        userData,
        setUserData,
        token,
        setToken,
        devices,
        setDevices,
        id,
        setId,
        local,
        setLocal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
