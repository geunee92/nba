import styled from "@emotion/styled";
import { FlexProps } from "./Flex.types";

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  align-items: ${({ alignItems = "center" }) => alignItems};
  flex-wrap: ${({ flexWrap = "wrap" }) => flexWrap};
  gap: ${({ gap = "16px" }) => gap};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  color: ${({ color }) => color || "inherit"};
  padding: ${({ padding }) => padding};
`;
