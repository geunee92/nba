import { HTMLAttributes, ReactNode } from "react";
import { typography } from "../../tokens/typography";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingSize = keyof typeof typography.fontSize;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  size?: HeadingSize;
  children: ReactNode;
}
