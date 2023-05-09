import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const LoginImgContainer = styled.img`
  height: 100vh;
  width: 65%;

  @media (max-width: 1000px) {
    height: 50%;
    width: 100%;
  }
`;

export const MenuContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10rem;
  @media (max-width: 1000px) {
    width: 100%;
    height: 50%;
  }
`;

export const MenuImgContainer = styled.img`
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const HeaderMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const FormContainer = styled.form`
  flex: 1;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  margin-bottom: 5rem;
`;

export const LabelCheckBoxContainer = styled.label`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
`;

export const InputCheckBoxContainer = styled.input`
  border: none;
  margin-right: 0.5rem;
`;

export const InputTextContainer = styled.input`
  border-radius: 8px;
  border: 0;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 1rem;
  width: 20rem;

  &::placeholder {
    opacity: 0.5;
  }
`;

export const ButtonAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.footer`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};

  @media (max-width: 1000px) {
    img {
      width: 10rem;
      height: 4rem;
    }
  }
`;

export const TextContainer = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.blue};
  text-decoration: underline;
`;
