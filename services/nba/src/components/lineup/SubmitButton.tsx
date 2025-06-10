import React, { useState } from "react";
import { Button, Flex, Modal } from "@nba-design/ui";
import { Player } from "../../types/player";
import { updateLineup } from "../../remote/saveLineup";
interface SubmitButtonProps {
  selectedPlayers: Player[];
}

export function SubmitButton({ selectedPlayers }: SubmitButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async () => {
    if (selectedPlayers.length !== 5) {
      setModalMessage("❗ 선수는 반드시 5명을 선택해야 합니다.");
      console.log(1213);
      setIsModalOpen(true);
      return;
    }

    try {
      await updateLineup(selectedPlayers);
      setModalMessage("✅ 라인업이 성공적으로 제출되었습니다!");
    } catch (error) {
      console.error("라인업 제출 실패:", error);
      setModalMessage("⚠️ 라인업 제출 중 오류가 발생했습니다.");
    } finally {
      setIsModalOpen(true);
    }
  };

  return (
    <Flex justifyContent="center">
      <Button
        variant="primary"
        size="lg"
        style={{ width: 240, textAlign: "center" }}
        onClick={handleSubmit}
      >
        라인업 제출하기
      </Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>{modalMessage}</p>
      </Modal>
    </Flex>
  );
}
