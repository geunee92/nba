import { HTMLAttributes, ReactNode } from "react";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number | string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  children: ReactNode;
}
