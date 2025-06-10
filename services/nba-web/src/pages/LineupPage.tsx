import React, { useState } from "react";

import { Flex, spacing, useToast } from "@nba-design/ui";

import { Player, Position } from "../types/player";
import { mockPlayers } from "../mocks/player";
import { LineupSummary } from "src/components/lineup/LineupSummary";
import { PositionTabs } from "src/components/lineup/PositionTabs";
import { SelectedPlayers } from "src/components/lineup/SelectedPlayer";
import { PlayerList } from "src/components/lineup/PlayerList";
import { SubmitButton } from "src/components/lineup/SubmitButton";

const POSITIONS: Position[] = ["PG", "SG", "SF", "PF", "C"];
const MAX_BUDGET = 15;
const MAX_PLAYERS = 5;

export default function LineupPage() {
  const { addToast } = useToast();

  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [activePosition, setActivePosition] = useState<Position>("PG");

  const handleSelect = (player: Player) => {
    const isSelected = selectedPlayers.some((p) => p.id === player.id);
    const total = selectedPlayers.reduce((sum, p) => sum + p.dollar, 0);

    if (isSelected) {
      setSelectedPlayers((prev) => prev.filter((p) => p.id !== player.id));
      return;
    }

    if (
      total + player.dollar > MAX_BUDGET ||
      selectedPlayers.length >= MAX_PLAYERS
    ) {
      addToast("총 예산 15달러 또는 최대 5명을 초과할 수 없습니다!", "error");
      return;
    }

    const withoutSamePosition = selectedPlayers.filter(
      (p) => p.position !== player.position,
    );
    setSelectedPlayers([...withoutSamePosition, player]);
  };

  const filteredPlayers = mockPlayers.filter(
    (p) => p.position === activePosition,
  );
  const totalDollar = selectedPlayers.reduce(
    (sum, player) => sum + player.dollar,
    0,
  );

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      gap={spacing.xl}
      padding={spacing.lg}
    >
      <LineupSummary
        totalDollar={totalDollar}
        selectedCount={selectedPlayers.length}
        maxBudget={MAX_BUDGET}
        maxPlayers={MAX_PLAYERS}
      />

      <PositionTabs
        positions={POSITIONS}
        activePosition={activePosition}
        onSelect={setActivePosition}
      />

      <SelectedPlayers
        selectedPlayers={selectedPlayers}
        onSelect={handleSelect}
      />

      <PlayerList
        players={filteredPlayers}
        selectedPlayers={selectedPlayers}
        onSelect={handleSelect}
        position={activePosition}
      />

      <SubmitButton selectedPlayers={selectedPlayers} />
    </Flex>
  );
}
