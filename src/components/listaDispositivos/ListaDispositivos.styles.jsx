import styled from "styled-components";

export const DivListaDispositivoStyle = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  max-width: 1000px;
`;
export const UlListaDispositivo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-content: center;
`;

export const LiListaDispositivo = styled.li`
  list-style: none;
`;

export const H1Ld = styled.h1`
  color: ${({ theme }) => theme.colors.headerBackground};
`;

export const CardListaDispositivo = styled.div`
  border: 1px solid black;
  height: 300px;
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

  .linkLocal {
    color: ${({ theme }) => theme.colors.primary4};
    margin-top: 5px;
    justify-self: center;
    font-size: 18px;
  }

  .adicionaDispositivo {
    color: ${({ theme }) => theme.colors.headerTitle};
    justify-self: center;
    background-color: ${({ theme }) => theme.colors.headerBackground};
    padding-left: 8px;
    padding-right: 8px;
    margin: 0px;
    height: 20px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
  }
`;

export const ImgListaDispositivo = styled.img`
  max-width: 100px;
  max-height: 150px;
  justify-self: center;
  width: auto;
  height: auto;
`;

export const NomeListaDispositivo = styled.h2`
  justify-self: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 18px;
  margin-bottom: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
`;
export const BotaoListaDispositivo = styled.button`
  margin-left: 10px;
  height: 30px;
  width: 100px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  border: 0px solid ${({ theme }) => theme.colors.headerTitle};
  border-radius: 9px;
  font-size: 10px;
  justify-self: center;
  color: ${({ theme }) => theme.colors.headerTitle};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary2};
  }
`;

export const PListaDispositivo = styled.p`
  color: ${({ theme }) => theme.colors.primary4};
`;

export const H3ListaDispositivo = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const BotaoEscolheLocal = styled.button`
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
  margin-top: 30px;
`;

export const CardDispositivoSelecionado = styled.div`
  border: 1px solid black;
  height: 500px;
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
`;

export const H1Dispositivo = styled.h1`
  color: ${({ theme }) => theme.colors.primary2};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 23px;
  text-align: center;
  margin-top: 20px;
`;

export const SectionDispositivos = styled.section``;

export const PInicio = styled.p`
  color: ${({ theme }) => theme.colors.secondary2};
  text-align: center;
  font-size: 16px;
`;

export const FormBusca = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;
export const InputBusca = styled.input``;
export const BotaoBusca = styled.button`
  height: 20px;
`;

export const SectionBusca = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  align-content: center;
`;
