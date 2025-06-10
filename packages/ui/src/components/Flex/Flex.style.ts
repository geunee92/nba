import styled from "@emotion/styled";
import { FlexProps } from "./Flex.types";

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  align-items: ${({ alignItems = "stretch" }) => alignItems};
  flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};
  gap: ${({ gap = "0" }) => gap};
`;
