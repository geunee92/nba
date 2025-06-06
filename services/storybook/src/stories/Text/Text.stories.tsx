import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "@nba-design/ui";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "이것은 기본 텍스트입니다.",
    size: "base",
    weight: "regular",
    color: "text",
  },
};
