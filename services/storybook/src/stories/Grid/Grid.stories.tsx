import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid, Card, Text } from "@nba-design/ui";

const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: function Render() {
    return (
      <Grid columns={[1, 2, 3]} gap="lg">
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <Text>Card {i + 1}</Text>
          </Card>
        ))}
      </Grid>
    );
  },
};
