import { CSSProperties, HTMLAttributes, JSX, ReactNode } from "react";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  flexWrap?: CSSProperties["flexWrap"];
  gap?: string;
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  padding?: CSSProperties["padding"];
  children: ReactNode;
}
