import { SubtitleContainer, TitleContainer } from "./styles";

interface Props {
  title: string;
  subtitle: string;
}

export function TitleAndSubtitle({ title, subtitle }: Props) {
  return (
    <>
      <TitleContainer>{title}</TitleContainer>
      <SubtitleContainer>{subtitle}</SubtitleContainer>
    </>
  );
}
