import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const LoginImgContainer = styled.img`
  height: 100%;
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
  margin-top: 5rem;
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
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  margin-bottom: 8rem;
`;

export const LabelCheckBoxContainer = styled.label`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
`;

export const InputCheckBoxContainer = styled.input`
  border: none;
  margin-right: 0.5rem;
  background-color: transparent;
`;

export const InputPasswordContainer = styled.div`
  display: flex;
  justify-content: space-around;

  svg {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ButtonIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: color;
  outline: unset;
  position: relative;
  border: unset;
  border-radius: 0.5rem;
  padding: 0.675rem;
  background-color: ${(props) => props.theme.colors.footer};
  border: none;
  cursor: pointer;
`;

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

export const TextContainer = styled.a`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.blue};
  text-decoration: underline;
  margin-bottom: 1rem;
`;

export const ChangeThemeButtonContainer = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px red 33;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
    margin-right: 1rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.text};
    border-radius: 34px;
    transition: all 0.3s ease-in-out;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }

  input:checked + .slider {
    background-color: ${(props) => props.theme.colors.text};
  }

  input:checked + .slider:before {
    transform: translateX(20px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
