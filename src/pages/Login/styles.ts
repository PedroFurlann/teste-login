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
  width: 35%;
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
  gap: 1rem;
  margin-bottom: 4rem;
`;

export const FormContainer = styled.form`
  flex: 1;
`;

export const AuthenticatedContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`

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

export const InputPasswordContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const ButtonIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  background-color: color;
  border-radius: 0.5rem;
  padding: 0.675rem;
  background-color: ${(props) => props.theme.colors.text};
  border: none;
  cursor: pointer;
`

export const InputTextContainer = styled.input`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border: 0;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.footer};
  color: ${(props) => props.theme.colors.text};
  padding: 1rem;
  width: 20rem;
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
  background-color: ${(props) => props.theme.colors.footer};

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
  margin-bottom: 1rem;
`;
