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
`

export const MenuImgContainer = styled.img`
  object-fit: cover;
  margin-bottom: 1rem;
`
export const HeaderMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`