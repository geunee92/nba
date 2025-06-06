import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "@nba-design/ui";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    children: "카드 안의 콘텐츠입니다",
    backgroundColor: "#ffffff",
    radius: "12px",
    padding: "16px",
    shadow: true,
    border: "1px solid #e0e0e0",
    inline: false,
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
export const NoShadow: Story = {
  args: {
    shadow: false,
  },
};
export const InlineCard: Story = {
  args: {
    inline: true,
  },
};
