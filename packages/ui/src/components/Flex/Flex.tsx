// packages/ui/components/Flex/Flex.tsx
import React from "react";
import { StyledFlex } from "./Flex.style";
import type { FlexProps } from "./Flex.types";

export function Flex({
  as,
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "stretch",
  flexWrap = "nowrap",
  gap = "0",
  children,
  ...props
}: FlexProps) {
  return (
    <StyledFlex
      as={as}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      gap={gap}
      {...props}
    >
      {children}
    </StyledFlex>
  );
}
