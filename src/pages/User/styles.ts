import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`