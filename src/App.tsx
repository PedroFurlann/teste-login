import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import { Login } from "./pages/Login";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(lightTheme)

  function handleChangeTheme() {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Login onChangeTheme={handleChangeTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
