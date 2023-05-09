import {
  AuthenticatedContainer,
  ButtonAndTextContainer,
  ButtonIconContainer,
  CheckBoxContainer,
  Container,
  FooterContainer,
  FormContainer,
  HeaderMenuContainer,
  InputCheckBoxContainer,
  InputPasswordContainer,
  InputTextContainer,
  LabelCheckBoxContainer,
  LoginImgContainer,
  MenuContainer,
  MenuImgContainer,
  TextContainer,
} from "./styles";
import login_img from "../../assets/login_img.jpeg";
import menu_img from "../../assets/logo_waybe.png";
import { TitleAndSubtitle } from "../../components/TitleAndSubtitle";
import { Button } from "../../components/Button";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Eye } from "phosphor-react";

interface Props {
  footer_img: string;
  onChangeTheme: () => void;
}

interface ResponseData {
  mensagem: string;
  nome: string;
}

export function Login({ footer_img, onChangeTheme }: Props) {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [nameAndMessage, setNameAndMessage] = useState<ResponseData>();

  const inputRef = useRef<HTMLInputElement>(null)

  function handleUserChange(event: ChangeEvent<HTMLInputElement>) {
    setUser(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleChangeIsAuthenticate() {
    setIsAuthenticate(false)
  }

  function handleShowPassword() {
    if(inputRef.current?.type === "password") {
      inputRef.current.type = "text"
    } else {
      if(inputRef.current !== null)
      inputRef.current.type = "password"
    }
  }

  let postData = {
    usuario: user,
    senha: password,
  };

  const data = JSON.stringify(postData);

  async function postingDataForAuthentication() {
    try {
      event?.preventDefault();
      await axios
        .post("https://sifat.com.br/testes/api-php-e1j45/", data)
        .then((response) => {
          console.log(response.data)
          setNameAndMessage(response.data);
          setIsAuthenticate(true);
        });
    } catch (error) {
      console.log(error);
      alert("Erro ao se autenticar: usuário ou senha incorretos!");
    } 
  }

  useEffect(() => {}, [nameAndMessage]);

  return (
    <Container>
      <LoginImgContainer src={login_img} />
      <MenuContainer>
        <HeaderMenuContainer>
          <Button
            text="Mudar tema"
            onClick={onChangeTheme}
            style={{ marginTop: -32, marginBottom: 16 }}
          />

        </HeaderMenuContainer>
        {isAuthenticate === false ? (
          <FormContainer>
            <MenuImgContainer src={menu_img} alt="Logo Waybe" />
             <TitleAndSubtitle
            title="Bem vindo ao Waybe ERP!"
            subtitle="Por favor, insira seus dados para efetuar o login."
          />
            <InputTextContainer
              type="text"
              placeholder="Email"
              onChange={handleUserChange}
              required
              style={{ marginTop: 42 }}
            />
            <hr style={{ marginBottom: 16 }} />
            <InputPasswordContainer>
              <InputTextContainer
                type="password"
                placeholder="Senha"
                onChange={handlePasswordChange}
                ref={inputRef}
                required
              />

              <ButtonIconContainer type="button" onClick={handleShowPassword}>
                <Eye />
              </ButtonIconContainer>
            </InputPasswordContainer>
            <hr style={{ marginBottom: 24 }} />
            <CheckBoxContainer>
              <InputCheckBoxContainer type="checkbox" />
              <LabelCheckBoxContainer>Lembrar usuário</LabelCheckBoxContainer>
            </CheckBoxContainer>
            <ButtonAndTextContainer>
              <Button
                type="submit"
                text="Entrar"
                style={{ marginBottom: 16 }}
                onClick={postingDataForAuthentication}
              />
              <TextContainer>Esqueci minha senha</TextContainer>
            </ButtonAndTextContainer>
          </FormContainer>
        ) : (
          <AuthenticatedContainer>
            <TitleAndSubtitle
              title={`Nome do usuário: ${nameAndMessage?.nome}`}
              subtitle={`${nameAndMessage?.mensagem}`}
            />
            <Button text="Voltar" onClick={handleChangeIsAuthenticate}
              style={{ marginTop: 16, marginBottom: 16 }}
            />
          </AuthenticatedContainer>
        )}

        <FooterContainer>
          <img src={footer_img} alt="Logo da Sifat" />
        </FooterContainer>
      </MenuContainer>
    </Container>
  );
}
