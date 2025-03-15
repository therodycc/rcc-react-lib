import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import {
  faFileAlt,
  faHome,
  faHouseFire,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/global.css";
import { RccLayout } from "../layout/Layout";

const meta = {
  title: "Example/RccLayout",
  component: RccLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { handleShowAsideBar: fn(), leftSection: "", rightSection: "" },
} satisfies Meta<typeof RccLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Layout: Story = {
  args: {
    asideOptions: [
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
    handleShowAsideBar: fn(),
    leftSection: "",
    rightSection: "",
  },
};
