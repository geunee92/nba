import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@nba-design/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "버튼",
    size: "md",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
