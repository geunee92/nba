import { HTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "background";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & HTMLAttributes<HTMLButtonElement>;
