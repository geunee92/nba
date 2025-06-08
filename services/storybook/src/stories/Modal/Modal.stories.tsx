import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Modal } from "@nba-design/ui"; // 모노레포 경로

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// ✅ Hook은 컴포넌트 최상단에서만 호출 가능하므로 render 바깥으로 분리
function ModalWithButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>모달 제목</h2>
        <p>이곳에 모달 내용을 넣을 수 있어요.</p>
      </Modal>
    </>
  );
}

export const Default: Story = {
  render: () => <ModalWithButton />,
};
