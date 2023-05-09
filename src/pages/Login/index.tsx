import {
  ButtonAndTextContainer,
  CheckBoxContainer,
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
  TextContainer,
} from "./styles";
import login_img from "../../assets/login_img.jpeg";
import menu_img from "../../assets/logo_waybe.jpeg";
import footer_img from "../../assets/logo_sifat_light.jpeg";
import { TitleAndSubtitle } from "../../components/TitleAndSubtitle";
import { Button } from "../../components/Button";
import { ChangeEvent, useState } from "react";

export function Login() {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  function handleUserChange(event: ChangeEvent<HTMLInputElement>) {
    setUser(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

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
          <InputTextContainer
            type="text"
            placeholder="Email"
            onChange={handleUserChange}
            required
          />
          <hr style={{ marginBottom: 16 }} />
          <InputTextContainer
            type="password"
            placeholder="Senha"
            onChange={handlePasswordChange}
            required
          />
          <hr style={{ marginBottom: 24 }} />

          <CheckBoxContainer>
            <InputCheckBoxContainer type="checkbox" />
            <LabelCheckBoxContainer>Lembrar usuário</LabelCheckBoxContainer>
          </CheckBoxContainer>

          <ButtonAndTextContainer>
            <Button type="submit" text="Entrar" style={{ marginBottom: 16 }} />
            <TextContainer>Esqueci minha senha</TextContainer>
          </ButtonAndTextContainer>
        </FormContainer>

        <FooterContainer>
          <img src={footer_img} alt="" />
        </FooterContainer>
      </MenuContainer>
    </Container>
  );
}
