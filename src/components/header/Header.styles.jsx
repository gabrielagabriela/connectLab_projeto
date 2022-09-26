import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.headerTitle};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
`;

export const HeaderTitle = styled.h1`
  font-size: 38px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 10px;
  margin-right: 30px;
  list-style: none;

  .headerLinks {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 23px;
    color: ${({ theme }) => theme.colors.headerLinks};
    text-decoration: none;
  }
`;
