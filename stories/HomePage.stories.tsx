import React from "react";
import HomePage from "../pages";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Pages/HomePage",
  component: HomePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HomePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);

export const Home = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
