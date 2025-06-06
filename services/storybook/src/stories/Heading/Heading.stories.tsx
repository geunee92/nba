import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "@nba-design/ui";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "NBA All-Time Rankings",
    level: 1,
    size: "lg",
  },
};
