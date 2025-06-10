import { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  flexWrap?: CSSProperties["flexWrap"];
  gap?: string;
  children: ReactNode;
}
