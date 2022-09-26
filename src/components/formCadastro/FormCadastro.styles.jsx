import styled from "styled-components";

export const FormStyle = styled.form`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  align-items: center;
  margin-top: 80px;
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.border} 0px 1px 3px,
    ${({ theme }) => theme.colors.border} 0px 1px 2px;
  font-family: "Roboto", sans-serif;
  background-color: ${({ theme }) => theme.colors.headerTitle};
`;

export const H1Cadastro = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.headerBackground};
  margin-bottom: 30px;
`;

export const LabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary3};
`;
export const InputStyle = styled.input`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondary2};
  height: 25px;
  width: 500px;
  margin-top: 5px;
  display: flex;
`;

export const ButtonStyle = styled.button`
  width: 300px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.headerTitle};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
`;

export const SpanForm = styled.span`
  color: ${({ theme }) => theme.colors.atention};
  position: absolute;
  margin-top: 50px;
`;
export const SectionDispositivoSelecionado = styled.section`
  text-align: center;

  .cancelarAdiciona {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondary2};
  }
`;
export const SelectLocal = styled.select`
  margin-top: 10px;
  width: 150px;
`;
export const OptionComodo = styled.option``;
