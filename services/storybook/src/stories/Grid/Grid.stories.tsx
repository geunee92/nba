import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid, Card } from "@nba-design/ui";

const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    columns: 3,
    gap: "16px",
    children: (
      <>
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
        <Card>Item 4</Card>
      </>
    ),
  },
};
