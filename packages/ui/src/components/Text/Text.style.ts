import styled from "@emotion/styled";
import { TextProps } from "./Text.types";
import { typography } from "../../tokens/typography";
import { colors } from "../../tokens/colors";

export const StyledText = styled.p<TextProps>`
  margin: 0;
  font-family: ${typography.fontFamily};
  font-size: ${({ size = "base" }) => typography.fontSize[size]};
  font-weight: ${({ weight = "regular" }) => typography.fontWeight[weight]};
  color: ${({ color = "text" }) => colors[color]};
`;
