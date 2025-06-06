import React, { JSX } from "react";
import { HeadingProps } from "./Heading.types";
import { StyledHeading } from "./Heading.style";

export function Heading({
  level = 1,
  size = "lg",
  children,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <StyledHeading as={Tag} size={size} {...props}>
      {children}
    </StyledHeading>
  );
}
