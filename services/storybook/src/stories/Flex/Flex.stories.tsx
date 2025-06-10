import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex } from "@nba-design/ui";

const meta: Meta<typeof Flex> = {
  title: "Components/Flex",
  component: Flex,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
    children: (
      <>
        <div style={{ background: "#eee", padding: "8px" }}>Box 1</div>
        <div style={{ background: "#ccc", padding: "8px" }}>Box 2</div>
        <div style={{ background: "#aaa", padding: "8px" }}>Box 3</div>
      </>
    ),
  },
};
