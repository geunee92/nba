import React from "react";
import { StyledFlex } from "./Flex.style";
import { FlexProps } from "./Flex.types";

export function Flex({
  align = "stretch",
  justify = "start",
  direction = "row",
  wrap = "nowrap",
  gap = "0",
  children,
  ...props
}: FlexProps) {
  return (
    <StyledFlex
      align={align}
      justify={justify}
      direction={direction}
      wrap={wrap}
      gap={gap}
      {...props}
    >
      {children}
    </StyledFlex>
  );
}
