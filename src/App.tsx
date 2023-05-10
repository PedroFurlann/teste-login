import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import lightTheme from "./styles/themes/lightTheme";
import darkTheme from "./styles/themes/darkTheme";
import { Login } from "./pages/Login";
import { useState } from "react";
import logo_sifat_light from './assets/logo_sifat_light.jpeg'
import logo_sifat_dark from './assets/logo_sifat_dark.png'

function App() {
  const [theme, setTheme] = useState(lightTheme)
  const [logoByTheme, setLogoByTheme] = useState(logo_sifat_light)

  function changeTheme() {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)

    setLogoByTheme(theme === lightTheme ? logo_sifat_dark : logo_sifat_light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Login onChangeTheme={changeTheme} footer_img={logoByTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
