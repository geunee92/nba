import React from "react";
import { Flex, Grid, Heading, Text, spacing } from "@nba-design/ui";
import { Player } from "../../types/player";
import { PlayerCard } from "../PlayerCard";

interface SelectedPlayersProps {
  selectedPlayers: Player[];
  // eslint-disable-next-line no-unused-vars
  onSelect: (player: Player) => void;
}

export function SelectedPlayers({
  selectedPlayers,
  onSelect,
}: SelectedPlayersProps) {
  return (
    <Flex flexDirection="column" gap={spacing.sm} alignItems="center">
      <Heading level={3} size="base">
        ✅ 선택된 선수
      </Heading>
      {selectedPlayers.length > 0 ? (
        <Grid columns={[1, 2, 3]} gap="md">
          {selectedPlayers.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              isSelected
              onSelect={onSelect}
            />
          ))}
        </Grid>
      ) : (
        <Text color="muted">선수 5명을 선택해주세요.</Text>
      )}
    </Flex>
  );
}
