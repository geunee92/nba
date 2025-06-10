import React from "react";
import { Chip, Flex, spacing } from "@nba-design/ui";
import { Position } from "../../types/player";

interface PositionTabsProps {
  positions: Position[];
  activePosition: Position;
  // eslint-disable-next-line no-unused-vars
  onSelect: (pos: Position) => void;
}

export function PositionTabs({
  positions,
  activePosition,
  onSelect,
}: PositionTabsProps) {
  return (
    <Flex gap={spacing.sm} flexWrap="wrap">
      {positions.map((pos) => (
        <Chip
          key={pos}
          label={pos}
          selected={activePosition === pos}
          onClick={() => onSelect(pos)}
        />
      ))}
    </Flex>
  );
}
