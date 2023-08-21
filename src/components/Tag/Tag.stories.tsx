import type { StoryObj } from "@storybook/react";

import { Tag } from "./Tag";

export default { component: Tag };
const meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: {
    color: "blue",
    text: "Ganhe R$10,00 de Desconto !",
    type: "informative",
  },
};

export const LightGray: Story = {
  args: {
    color: "light-gray",
    text: "JordanShoes",
    type: "title",
  },
};
