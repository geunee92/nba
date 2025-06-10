import React from "react";
import { Grid, Heading } from "@nba-design/ui";
import { Player } from "../../types/player";
import { PlayerCard } from "../PlayerCard";

interface PlayerListProps {
  players: Player[];
  selectedPlayers: Player[];
  // eslint-disable-next-line no-unused-vars
  onSelect: (player: Player) => void;
  position: string;
}

export function PlayerList({
  players,
  selectedPlayers,
  onSelect,
  position,
}: PlayerListProps) {
  return (
    <>
      <Heading level={3} size="base">
        📋 {position} 포지션 선수
      </Heading>
      <Grid columns={[1, 2, 3]} gap="md">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            isSelected={selectedPlayers.some((p) => p.id === player.id)}
            onSelect={onSelect}
          />
        ))}
      </Grid>
    </>
  );
}
