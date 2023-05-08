import {
  Container,
  FooterContainer,
  FormContainer,
  HeaderMenuContainer,
  InputCheckBoxContainer,
  InputTextContainer,
  LabelCheckBoxContainer,
  LoginImgContainer,
  MenuContainer,
  MenuImgContainer,
} from "./styles";
import login_img from "../../assets/login_img.jpeg";
import menu_img from "../../assets/logo_waybe.jpeg";
import footer_img from '../../assets/logo_sifat_light.jpeg'
import { TitleAndSubtitle } from "../../components/TitleAndSubtitle";
import { Button } from "../../components/Button";

export function Login() {
  return (
    <Container>
      <LoginImgContainer src={login_img} />
      <MenuContainer>
        <HeaderMenuContainer>
          <MenuImgContainer src={menu_img} />
          <TitleAndSubtitle
            title="Bem vindo ao Waybe ERP!"
            subtitle="Por favor, insira seus dados para efetuar o login."
          />
        </HeaderMenuContainer>
        <FormContainer>
          
          <InputTextContainer type="text" placeholder="Email"  />
          <hr style={{ marginBottom: 16 }} />
          <InputTextContainer type="password" placeholder="Senha" />
          <hr style={{ marginBottom: 10 }} />
          

          
          <InputCheckBoxContainer type="checkbox" />
          <LabelCheckBoxContainer>
            Lembrar usuário
          </LabelCheckBoxContainer>
          

        <Button type="submit" text="Entrar" />
        
        </FormContainer>

        <FooterContainer>
          <img src={footer_img} alt=""/>
        </FooterContainer>
      </MenuContainer>
    </Container>
  );
}
