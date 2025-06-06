import styled from "@emotion/styled";
import { BadgeProps } from "./Badge.types";

const variantMap = {
  default: {
    backgroundColor: "#E0E0E0",
    color: "#333",
  },
  success: {
    backgroundColor: "#4CAF50",
    color: "white",
  },
  warning: {
    backgroundColor: "#FFC107",
    color: "#333",
  },
  error: {
    backgroundColor: "#F44336",
    color: "white",
  },
};

export const StyledBadge = styled.span<Required<Pick<BadgeProps, "variant">>>(
  ({ variant }) => ({
    display: "inline-block",
    padding: "0.25em 0.5em",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: 600,
    lineHeight: 1,
    ...variantMap[variant],
  }),
);
