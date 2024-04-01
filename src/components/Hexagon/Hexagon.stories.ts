import { Hexagon } from "./Hexagon";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "EDM/Screens/Hexagon",
  component: Hexagon,
  tags: ["autodocs"],
} satisfies Meta<typeof Hexagon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Hexagon",
  },
};
