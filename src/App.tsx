import { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyle } from "./styles/global";
import lightTheme from "./themes/lightTheme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
