import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@nba-design/ui";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Variants: Story = {
  render: () => (
    <>
      <Badge variant="default">Default</Badge>{" "}
      <Badge variant="success">Success</Badge>{" "}
      <Badge variant="warning">Warning</Badge>{" "}
      <Badge variant="error">Error</Badge>
    </>
  ),
};
