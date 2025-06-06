import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ButtonProps, ButtonSize, ButtonVariant } from "./Button.types";

const sizeStyles = {
  sm: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    border-radius: 6px;
  `,
  md: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 8px;
  `,
  lg: css`
    padding: 0.75rem 1.25rem;
    font-size: 1.125rem;
    border-radius: 10px;
  `,
} as const;

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;

  ${({ size }) => (size ? sizeStyles[size] : sizeStyles.md)}

  ${({ variant }) =>
    variant === "primary"
      ? css`
          background-color: #007aff;
          color: white;
        `
      : css`
          background-color: #e0e0e0;
          color: #333;
        `}
`;
