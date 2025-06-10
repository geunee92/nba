import { Button, Flex } from "@nba-design/ui";

interface CTASectionProps {
  onClick: () => void;
}

export function CTASection({ onClick }: CTASectionProps) {
  return (
    <Flex justifyContent="center">
      <Button size="lg" onClick={onClick}>
        지금 바로 시작
      </Button>
    </Flex>
  );
}
