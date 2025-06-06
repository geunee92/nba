import React from "react";
import { AvatarProps } from "./Avatar.types";
import { StyledAvatar } from "./Avatar.style";

export const Avatar = ({ src, alt = "avatar", size = "md" }: AvatarProps) => {
  return <StyledAvatar src={src} alt={alt} size={size} />;
};
