import styled from "@emotion/styled";
import { FlexProps } from "./Flex.types";

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ align = "stretch" }) => {
    if (align === "start") return "flex-start";
    if (align === "end") return "flex-end";
    return align;
  }};
  justify-content: ${({ justify = "start" }) => {
    if (justify === "start") return "flex-start";
    if (justify === "end") return "flex-end";
    if (justify === "between") return "space-between";
    if (justify === "around") return "space-around";
    if (justify === "evenly") return "space-evenly";
    return justify;
  }};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
  gap: ${({ gap = "0" }) => gap};
`;
