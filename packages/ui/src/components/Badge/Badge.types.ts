import { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant = "default" | "success" | "warning" | "error";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
}
