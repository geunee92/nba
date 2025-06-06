import React from "react";
import { CardProps } from "./Card.types";
import { StyledCard } from "./Card.style";

export function Card(props: React.PropsWithChildren<CardProps>) {
  const { children, ...rest } = props;

  return <StyledCard {...rest}>{children}</StyledCard>;
}
