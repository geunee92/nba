import { HTMLAttributes, ReactNode } from "react";

export type Align = "stretch" | "center" | "start" | "end" | "baseline";
export type Justify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";
export type Direction = "row" | "column" | "row-reverse" | "column-reverse";
export type Wrap = "nowrap" | "wrap" | "wrap-reverse";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  wrap?: Wrap;
  gap?: string;
  children: ReactNode;
}
