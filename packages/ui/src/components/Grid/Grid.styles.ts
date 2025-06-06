import styled from "@emotion/styled";
import { GridProps } from "./Grid.types";

export const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns = 2 }) =>
    typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns};
  gap: ${({ gap }) => gap ?? "0"};
  row-gap: ${({ rowGap }) => rowGap ?? "initial"};
  column-gap: ${({ columnGap }) => columnGap ?? "initial"};
`;
