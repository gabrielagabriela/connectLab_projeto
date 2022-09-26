import styled from "styled-components";

export const SectionClima = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  height: 200px;
  align-items: center;
  font-family: "Roboto", sans-serif;
  padding-bottom: 35px;
  padding-top: 25px;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.headerTitle};
  box-shadow: ${({ theme }) => theme.colors.border} 0px 1px 3px,
    ${({ theme }) => theme.colors.border} 0px 1px 2px;
  .detalhesTempo {
    display: flex;
    justify-content: center;
  }
`;
export const DivClima = styled.div`
  text-align: center;
`;

export const H2Clima = styled.h2`
  text-align: center;
  font-size: 35px;
  color: ${({ theme }) => theme.colors.primary4};
`;

export const H3Clima = styled.h3`
  text-align: center;
  font-size: 23px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PClima = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;
