import styled from "@emotion/styled";
import { spacing } from "../../tokens/spacing";
import { media } from "../../utils/media";
import { GridProps } from "./Grid.types";

function getColumnStyle(columns?: number | number[]) {
  if (!columns) return "";

  if (typeof columns === "number") {
    return `grid-template-columns: repeat(${columns}, 1fr);`;
  }

  const [sm, md, lg] = columns;

  return `
    grid-template-columns: repeat(${sm || 1}, 1fr);
    ${media.md} {
      grid-template-columns: repeat(${md || sm || 1}, 1fr);
    }
    ${media.lg} {
      grid-template-columns: repeat(${lg || md || sm || 1}, 1fr);
    }
  `;
}

export const StyledGrid = styled.div<GridProps>`
  display: grid;
  gap: ${({ gap }) => (gap ? spacing[gap] : spacing.md)};
  ${({ columns }) => getColumnStyle(columns)}
`;
