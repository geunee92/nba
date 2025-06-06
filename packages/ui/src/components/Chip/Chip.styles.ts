import styled from "@emotion/styled";
import { colors } from "../../tokens/colors";
import { spacing } from "../../tokens/spacing";
import { typography } from "../../tokens/typography";
import { ChipSize } from "./Chip.types";

export const ChipContainer = styled.div<{
  selected?: boolean;
  size: ChipSize;
}>`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.xs};
  border-radius: 9999px;
  cursor: pointer;
  font-weight: ${typography.fontWeight.regular};
  transition: background-color 0.2s ease;

  ${({ selected }) => `
    background-color: ${selected ? colors.primary : colors.muted};
    color: ${selected ? "#fff" : colors.text};
  `}

  ${({ size }) => {
    switch (size) {
      case "sm":
        return `
          padding: ${spacing.xs} ${spacing.sm};
          font-size: ${typography.fontSize.sm};
        `;
      case "lg":
        return `
          padding: ${spacing.md} ${spacing.lg};
          font-size: ${typography.fontSize.lg};
        `;
      case "md":
      default:
        return `
          padding: ${spacing.sm} ${spacing.md};
          font-size: ${typography.fontSize.base};
        `;
    }
  }}

  &:hover {
    ${({ selected }) =>
      selected ? `background-color: #15306b;` : `background-color: #ddd;`}
  }

  button {
    background: transparent;
    border: none;
    color: inherit;
    font-size: 0.75rem;
    cursor: pointer;
    padding: 0;
  }
`;
