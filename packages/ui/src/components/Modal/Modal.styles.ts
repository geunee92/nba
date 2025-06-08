import styled from "@emotion/styled";
import { colors } from "../../tokens/colors";
import { spacing } from "../../tokens/spacing";

// 오버레이 (배경 dimmed)
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

// 콘텐츠 박스
export const ModalContent = styled.div`
  background-color: ${colors.background};
  padding: ${spacing.lg};
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  min-width: 300px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

// 닫기 버튼
export const CloseButton = styled.button`
  position: absolute;
  top: ${spacing.sm};
  right: ${spacing.sm};
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: ${colors.text};
`;
