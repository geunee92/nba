import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "@nba-design/ui";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  args: {
    label: "LeBron James",
    selected: false,
    size: "md",
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    selected: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Chip {...args} size="sm" label="Small" />
      <Chip {...args} size="md" label="Medium" />
      <Chip {...args} size="lg" label="Large" />
    </div>
  ),
};

export const Deletable: Story = {
  args: {
    onDelete: () => alert("삭제됨!"),
  },
};
