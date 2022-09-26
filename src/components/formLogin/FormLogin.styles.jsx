import styled from "styled-components";

export const FormLoginStyle = styled.form`
  max-width: 520px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  align-items: center;
  margin-top: 150px;
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.border} 0px 1px 3px,
    ${({ theme }) => theme.colors.border} 0px 1px 2px;
  font-family: "Roboto", sans-serif;
  background-color: ${({ theme }) => theme.colors.headerTitle};
`;
export const H1Login = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.headerBackground};
`;

export const LabelLoginStyle = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary3};
`;
export const InputLoginStyle = styled.input`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondary2};
  height: 25px;
  width: 300px;
  margin-top: 5px;
`;

export const ButtonLoginStyle = styled.button`
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
  max-width: 130px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const SpanLoginForm = styled.span`
  color: ${({ theme }) => theme.colors.atention};
  position: absolute;
  margin-top: 50px;
`;
