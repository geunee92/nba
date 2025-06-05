import { css } from "@emotion/react";
import { ButtonSize, ButtonVariant } from "./Button.types";

const sizeMap = {
  sm: {
    padding: "0.25rem 0.5rem",
    fontSize: "0.8rem",
    borderRadius: "6px",
  },
  md: {
    padding: "0.5rem 10rem",
    fontSize: "1rem",
    borderRadius: "8px",
  },
  lg: {
    padding: "0.75rem 1.25rem",
    fontSize: "1.125rem",
    borderRadius: "10px",
  },
} as const;

export const buttonStyle = (variant: ButtonVariant, size: ButtonSize) =>
  css({
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    transition: "background 0.3s",
    ...sizeMap[size],
    ...(variant === "primary"
      ? {
          backgroundColor: "#007aff",
          color: "white",
        }
      : {
          backgroundColor: "#e0e0e0",
          color: "#333",
        }),
  });
