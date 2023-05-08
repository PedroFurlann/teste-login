import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  background-color: color;
  border-radius: 0.5rem;
  padding: 0.675rem;
  background-color: ${(props) => props.theme.colors.blue};
  border: none;
`

export const TextContainer = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.footer};
`