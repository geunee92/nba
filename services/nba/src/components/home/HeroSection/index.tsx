import { Button, Heading, Text } from "@nba-design/ui";
import Styled from "./index.styles";

interface HeroSectionProps {
  onClick: () => void;
}

export function HeroSection({ onClick }: HeroSectionProps) {
  return (
    <Styled.Wrapper>
      <Heading size="lg">NBA 최고의 라인업을 만들어보세요</Heading>

      <Text size="lg">15달러로 나만의 드림팀을 구성해보세요.</Text>

      <Button onClick={onClick}>라인업 시작하기</Button>
    </Styled.Wrapper>
  );
}
