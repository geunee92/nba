import { Button, Flex } from "@nba-design/ui";

interface CTASectionProps {
  onStart: () => void;
}

export function CTASection({ onStart }: CTASectionProps) {
  return (
    <Flex justifyContent="center">
      <Button size="lg" onClick={onStart}>
        지금 바로 시작
      </Button>
    </Flex>
  );
}
