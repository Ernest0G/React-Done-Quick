import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        borderColor: { control: 'color' },
        color: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Modern = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Modern.args = {
    label: "Hello world!",
    className: 'button-modern',
};

export const Minimal = Template.bind({});
Minimal.args = {
    label: "Hello world!",
    className: 'button-minimal',
};

export const FillSmall = Template.bind({});
FillSmall.args = {
    label: "Hello world!",
    className: 'button-minimal button-fill-sml',
};

export const FillMedium = Template.bind({});
FillMedium.args = {
    label: "Hello world!",
    className: 'button-minimal button-fill-med',
};

export const FillLarge = Template.bind({});
FillLarge.args = {
    label: "Hello world!",
    className: 'button-minimal button-fill-lar',
};