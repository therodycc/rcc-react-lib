import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";


import { RccButton } from "../components/button";
import '../assets/css/global.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: RccButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    
  },
  args: { action: fn() },
} satisfies Meta<typeof RccButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    size: "lg",
    children: "primary",
    bgClass: "primary",
    loading: false,
    type: "button",
  },
};