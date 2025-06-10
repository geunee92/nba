import React from "react";
import { Card, Flex, Heading, Text, spacing } from "@nba-design/ui";

interface LineupSummaryProps {
  totalDollar: number;
  selectedCount: number;
  maxBudget: number;
  maxPlayers: number;
}

export function LineupSummary({
  totalDollar,
  selectedCount,
  maxBudget,
  maxPlayers,
}: LineupSummaryProps) {
  return (
    <Card padding={spacing.md} radius="24px" shadow backgroundColor="#f0f2f5">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap="16px"
      >
        <Heading level={2} size="lg">
          나만의 라인업 만들기
        </Heading>

        <Text size="base" weight="bold">
          💰 ${totalDollar} / {maxBudget} &nbsp; | &nbsp; 🧍 {selectedCount} /{" "}
          {maxPlayers}
        </Text>
      </Flex>
    </Card>
  );
}
