import styled from "@emotion/styled";
import { typography } from "../../tokens/typography";
import { colors } from "../../tokens/colors";
import { HeadingSize } from "./Heading.types";

interface StyledHeadingProps {
  size: HeadingSize;
}

export const StyledHeading = styled.h1<StyledHeadingProps>`
  font-family: ${typography.fontFamily};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text};
  font-size: ${({ size }) => typography.fontSize[size]};
  margin: 0;
`;
