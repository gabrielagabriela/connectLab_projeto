import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { GlobalStyle } from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { themeBase } from "./theme/theme";
import { UserStorage } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <ThemeProvider theme={themeBase}>
        <GlobalStyle />
        <BrowserRouter>
          <UserStorage>
            <Router />
          </UserStorage>
        </BrowserRouter>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
