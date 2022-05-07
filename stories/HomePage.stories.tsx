/* eslint-disable storybook/story-exports */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HomePage from "../pages";

export default {
  title: "Page/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);

export const Home = Template.bind({});

Home.args = {};
