import React from "react";
import { BadgeProps } from "./Badge.types";
import { StyledBadge } from "./Badge.styles";

export function Badge({ children, variant = "default", ...props }: BadgeProps) {
  return (
    <StyledBadge variant={variant} {...props}>
      {children}
    </StyledBadge>
  );
}
