import styled from "@emotion/styled";
import type { CardProps } from "./Card.types";
import { media } from "../../utils/media";

export const StyledCard = styled.div<CardProps>`
  background-color: ${({ backgroundColor = "#fff" }) => backgroundColor};
  border-radius: ${({ radius = "12px" }) => radius};
  box-shadow: ${({ shadow = true }) =>
    shadow ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "none"};
  padding: ${({ padding = "16px" }) => padding};
  border: ${({ border }) => border ?? "none"};
  display: ${({ inline }) => (inline ? "inline-block" : "block")};
  transition: all 0.2s ease-in-out;

  width: 100%;
  max-width: 400px;

  ${media.md} {
    padding: 20px;
  }

  ${media.sm} {
    padding: 12px;
    border-radius: 8px;
  }
`;
