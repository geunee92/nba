import React from "react";
import { TextProps } from "./Text.types";
import { StyledText } from "./Text.style";

export const Text = ({
  children,
  size = "base",
  weight = "regular",
  color = "text",
  ...props
}: TextProps) => {
  return (
    <StyledText size={size} weight={weight} color={color} {...props}>
      {children}
    </StyledText>
  );
};
