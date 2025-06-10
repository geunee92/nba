import React from "react";
import { Avatar, Badge, Card, Flex, Text, Heading, Chip } from "@nba-design/ui";
import { Player } from "types/player";

interface PlayerCardProps {
  player: Player;
  // eslint-disable-next-line no-unused-vars
  onSelect?: (player: Player) => void;
  isSelected?: boolean;
}

export function PlayerCard({ player, onSelect, isSelected }: PlayerCardProps) {
  return (
    <Card
      padding="md"
      radius="lg"
      shadow
      border="1px solid #ccc"
      onClick={() => onSelect?.(player)}
    >
      <Flex flexDirection="column" alignItems="center" gap="sm">
        <Avatar src={player.imageUrl} alt={player.name} size="lg" />

        <Heading level={3} size="lg">
          {player.name}
        </Heading>

        <Badge variant="default">{player.position}</Badge>

        <Text size="sm" color="muted">
          {player.team}
        </Text>

        <Chip label={`$${player.dollar}`} selected={isSelected} />
      </Flex>
    </Card>
  );
}
