import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToastProvider, useToast, Button, Flex } from "@nba-design/ui";

const meta: Meta = {
  title: "Components/Toast",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: function Render() {
    function Demo() {
      const { addToast } = useToast();

      function handleInfo() {
        addToast("정보 메시지입니다.", "info");
      }

      function handleSuccess() {
        addToast("성공적으로 저장되었습니다.", "success");
      }

      function handleError() {
        addToast("에러가 발생했습니다.", "error");
      }

      return (
        <Flex>
          <Button onClick={handleInfo}>Info Toast</Button>
          <Button onClick={handleSuccess}>Success Toast</Button>
          <Button onClick={handleError}>Error Toast</Button>
        </Flex>
      );
    }

    return (
      <ToastProvider>
        <Demo />
      </ToastProvider>
    );
  },
};
