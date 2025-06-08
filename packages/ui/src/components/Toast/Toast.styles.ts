import styled from "@emotion/styled";
import { colors, spacing, typography } from "../../tokens";
import { ToastType } from "./Toast.types";

export const ToastWrapper = styled.div`
  position: fixed;
  top: ${spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  z-index: 9999;
  pointer-events: none; // 클릭 이벤트 무시 (필요 시 제거)
`;

export const ToastItem = styled.div<{ type: ToastType }>`
  background-color: ${({ type }) => {
    switch (type) {
      case "success":
        return "#4caf50";
      case "error":
        return "#f44336";
      case "info":
      default:
        return "#2196f3";
    }
  }};
  color: white;
  padding: ${spacing.sm} ${spacing.md};
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.regular};
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
