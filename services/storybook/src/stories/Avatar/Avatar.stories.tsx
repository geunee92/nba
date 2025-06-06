import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@nba-design/ui";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    src: { control: "text" },
    alt: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Small: Story = {
  args: {
    size: "sm",
    src: "https://i.pravatar.cc/150?img=1",
    alt: "Small Avatar",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    src: "https://i.pravatar.cc/150?img=2",
    alt: "Medium Avatar",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    src: "https://i.pravatar.cc/150?img=3",
    alt: "Large Avatar",
  },
};
