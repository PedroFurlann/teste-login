import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const LoginImgContainer = styled.img`
  height: 100vh;
  width: 65%;
`;

export const MenuContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 35%;
`;

export const MenuImgContainer = styled.img`
  object-fit: cover;
  margin-bottom: 1rem;
  flex: 1;
`;
export const HeaderMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const FormContainer = styled.form`
  flex: 1
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

export const FooterContainer = styled.footer`
  padding: 2.5rem;

  img {
    width: 100%;
  }

`
