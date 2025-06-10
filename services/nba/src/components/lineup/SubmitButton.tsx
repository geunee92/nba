import React from "react";
import { Button, Flex } from "@nba-design/ui";
import { Player } from "../../types/player";

interface SubmitButtonProps {
  selectedPlayers: Player[];
}

export function SubmitButton({ selectedPlayers }: SubmitButtonProps) {
  return (
    <Flex justifyContent="center">
      <Button
        variant="primary"
        size="lg"
        style={{ width: 240, textAlign: "center" }}
        onClick={() => console.log("제출!", selectedPlayers)}
      >
        라인업 제출하기
      </Button>
    </Flex>
  );
}
