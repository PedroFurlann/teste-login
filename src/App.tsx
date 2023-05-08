import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import { Login } from "./pages/Login";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
