export type ChipSize = "sm" | "md" | "lg";

export interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
  size?: ChipSize;
}
