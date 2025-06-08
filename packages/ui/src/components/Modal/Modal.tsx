import React, { useEffect } from "react";
import { ModalProps } from "./Modal.types";
import { Backdrop, ModalContent, CloseButton } from "./Modal.styles";

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // ESC 키 닫기 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        {children}
      </ModalContent>
    </Backdrop>
  );
};
