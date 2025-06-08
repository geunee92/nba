import { StyledButton } from "./Button.style";
import { ButtonProps } from "./Button.types";

export function Button({
  children,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
}
