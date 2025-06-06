import React from "react";
import { ChipProps } from "./Chip.types";
import { ChipContainer } from "./Chip.styles";

export const Chip = ({
  label,
  selected,
  onClick,
  onDelete,
  size = "md",
}: ChipProps) => {
  return (
    <ChipContainer selected={selected} size={size} onClick={onClick}>
      <span>{label}</span>

      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          ✕
        </button>
      )}
    </ChipContainer>
  );
};
