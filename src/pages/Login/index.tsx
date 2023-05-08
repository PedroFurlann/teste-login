import { Container, HeaderMenuContainer, LoginImgContainer, MenuContainer, MenuImgContainer } from "./styles";
import login_img from '../../assets/login_img.jpeg'
import menu_img from '../../assets/logo_waybe.jpeg'

export function Login() {
  return (
    <Container>
      <LoginImgContainer src={login_img} />
      <MenuContainer>
        <HeaderMenuContainer>
          <MenuImgContainer src={menu_img} />
          <p>ladsdasddsdsadsadsadsadasd</p>   
          <p>dsdsadsadsadsadsadsadsadsadsa</p>
        </HeaderMenuContainer>     
      </MenuContainer>
    </Container>
  );
}
