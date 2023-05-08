import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <h1>OLÁ MUNDO</h1>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
