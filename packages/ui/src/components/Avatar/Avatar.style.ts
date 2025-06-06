import styled from "@emotion/styled";
import { AvatarProps } from "./Avatar.types";
import { media } from "../../utils/media";

export const StyledAvatar = styled.img<Required<Pick<AvatarProps, "size">>>`
  border-radius: 50%;
  object-fit: cover;

  width: ${({ size }) =>
    size === "sm" ? "32px" : size === "md" ? "48px" : "64px"};
  height: ${({ size }) =>
    size === "sm" ? "32px" : size === "md" ? "48px" : "64px"};

  ${media.md} {
    width: ${({ size }) =>
      size === "sm" ? "38px" : size === "md" ? "58px" : "76px"};
    height: ${({ size }) =>
      size === "sm" ? "38px" : size === "md" ? "58px" : "76px"};
  }
`;
