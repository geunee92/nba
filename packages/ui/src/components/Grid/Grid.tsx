import { StyledGrid } from "./Grid.styles";
import { GridProps } from "./Grid.types";

export function Grid({ columns, gap = "md", children }: GridProps) {
  return (
    <StyledGrid columns={columns} gap={gap}>
      {children}
    </StyledGrid>
  );
}
