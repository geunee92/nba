import { buttonStyle } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <button css={buttonStyle(variant, size)} {...props}>
      {children}
    </button>
  );
};
