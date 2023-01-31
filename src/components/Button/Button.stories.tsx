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
        iconPath: { control: 'path' }
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Minimal = Template.bind({});
Minimal.args = {
    label: "Submit",
    className: 'button-minimal',
};

export const Modern = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Modern.args = {
    label: "Submit",
    className: 'button-modern',
};

export const Rounded = Template.bind({});
Rounded.args = {
    label: "Submit",
    className: 'button-minimal button-rounded',
};

export const Circle = Template.bind({});
Circle.args = {
    label: "Submit",
    className: 'button-minimal button-circle',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: "Submit",
    className: 'button-minimal button-with-icon',
    iconPath: 'https://cdn0.iconfinder.com/data/icons/basic-glyph/1024/upload-512.png'
};

export const IconOnly = Template.bind({});
IconOnly.args = {
    className: 'button-icon-only',
    iconPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DjRBYoqXZVkAwqiVnexMpaULNFG8W6YNSA&usqp=CAU'
}
export const FillSmall = Template.bind({});
FillSmall.args = {
    label: "Submit",
    className: 'button-minimal button-fill-sml',
};

export const FillMedium = Template.bind({});
FillMedium.args = {
    label: "Submit",
    className: 'button-minimal button-fill-med',
};

export const FillLarge = Template.bind({});
FillLarge.args = {
    label: "Submit",
    className: 'button-minimal button-fill-lar',
};

export const FillFull = Template.bind({});
FillFull.args = {
    label: "Submit",
    className: 'button-minimal button-fill-full',
};