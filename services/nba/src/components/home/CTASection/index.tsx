import { Button, Flex } from "@nba-design/ui";

interface CTASectionProps {
  onClick: () => void;
}

export function CTASection({ onClick }: CTASectionProps) {
  return (
    <Flex justifyContent="center">
      <Button size="lg" onClick={onClick}>
        라이언 랭킹 보기
      </Button>
    </Flex>
  );
}
