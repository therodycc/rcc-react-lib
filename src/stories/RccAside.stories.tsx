import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import {
  faFileAlt,
  faHome,
  faHouseFire,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/global.css";
import { RccAside } from "../layout/aside/index";

const meta = {
  title: "Example/RccAside",
  component: RccAside,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    handleSelected: fn(),
    logout: fn(),
  },
} satisfies Meta<typeof RccAside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Aside: Story = {
  args: {
    options: [
      {
        icon: faHome,
        title: "Dashboard",
        active: true,
        link: "/",
      },
      {
        icon: faHouseFire,
        title: "General",
        active: false,
        link: "/general",
      },
      {
        icon: faPiggyBank,
        title: "Savings",
        active: false,
        link: "/savings",
      },
      {
        icon: faFileAlt,
        title: "Reports",
        active: false,
        link: "/reports",
      },
    ],
  },
};
