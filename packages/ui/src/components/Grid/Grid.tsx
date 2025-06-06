import React from "react";
import { GridProps } from "./Grid.types";
import { StyledGrid } from "./Grid.styles";

export function Grid({
  columns = 2,
  gap,
  rowGap,
  columnGap,
  children,
  ...props
}: GridProps) {
  return (
    <StyledGrid
      columns={columns}
      gap={gap}
      rowGap={rowGap}
      columnGap={columnGap}
      {...props}
    >
      {children}
    </StyledGrid>
  );
}
