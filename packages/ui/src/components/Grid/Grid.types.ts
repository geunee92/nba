import { spacing } from "../../tokens";

export interface GridProps {
  columns?: number | number[];
  gap?: keyof typeof spacing;
  children: React.ReactNode;
}
