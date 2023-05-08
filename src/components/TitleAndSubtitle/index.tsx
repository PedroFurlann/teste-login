import { Container, SubtitleContainer, TitleContainer } from "./styles";

interface Props {
  title: string;
  subtitle: string;
}

export function TitleAndSubtitle({ title, subtitle }: Props) {
  return (
    <Container>
      <TitleContainer>{title}</TitleContainer>
      <SubtitleContainer>{subtitle}</SubtitleContainer>
    </Container>
  );
}
