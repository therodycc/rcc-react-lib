import type { Meta, StoryObj } from "@storybook/react";

import "../assets/css/global.css";
import { RccNav } from "../layout/nav";

const meta = {
  title: "Example/RccNav",
  component: RccNav,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
  },
} satisfies Meta<typeof RccNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Nav: Story = {
  args: {
    leftSection: "",
    rightSection: "",
  },
};
