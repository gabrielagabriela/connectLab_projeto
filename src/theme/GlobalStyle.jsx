import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;

}

.root {
    display: flex;
    flex-direction: column;
  
  }

body {
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bodyBackground};

 
}
`;
