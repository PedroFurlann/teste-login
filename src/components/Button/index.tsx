import { ButtonHTMLAttributes } from "react";
import { ButtonContainer, TextContainer } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text, ...props }: Props) {
  return (
    <ButtonContainer {...props}>
      <TextContainer>{text}</TextContainer>
    </ButtonContainer>
  );
}
