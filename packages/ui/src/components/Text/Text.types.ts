import { HTMLAttributes, ReactNode } from "react";
import { colors } from "../../tokens/colors";

export type TextSize = "sm" | "base" | "lg";
export type TextWeight = "regular" | "bold";
export type TextColor = keyof typeof colors;

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
}
