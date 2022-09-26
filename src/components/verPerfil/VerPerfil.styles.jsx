import styled from "styled-components";

export const DivVerPerfilStyle = styled.div`
  height: 600px;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.headerTitle};
  display: grid;
  padding-left: 30px;
  padding-right: 30px;
  border: 0px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.colors.border} 0px 1px 3px,
    ${({ theme }) => theme.colors.border} 0px 1px 2px;
  border-radius: 10px;
  padding-bottom: 30px;
  margin: 0 auto;
  margin-top: 50px;
  .logoutVerPerfil {
    color: ${({ theme }) => theme.colors.secondary2};
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const ImgVerPerfil = styled.img`
  max-width: 100px;
  max-height: 150px;
  justify-self: center;
  width: auto;
  height: auto;
`;

export const H1VerPerfil = styled.h1`
  color: ${({ theme }) => theme.colors.primary2};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
  margin-top: 30px;
`;

export const H2VerPerfil = styled.h2`
  justify-self: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 18px;
  margin-bottom: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ParagrafoVerPerfil = styled.p`
  color: ${({ theme }) => theme.colors.primary4};
`;

export const BotaoLogout = styled.button`
  margin-left: 10px;
  height: 30px;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  border: 0px solid ${({ theme }) => theme.colors.headerTitle};
  border-radius: 9px;
  color: ${({ theme }) => theme.colors.headerTitle};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary2};
  }
`;
export const DivEscolheLocal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
