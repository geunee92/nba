import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex, Card } from "@nba-design/ui";

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
    justify: "center",
    children: (
      <>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
      </>
    ),
  },
};
