import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

export default {
    title: "ReactComponentLibrary/Input",
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Minimal = Template.bind({});
Minimal.args = {
    placeHolder: "Email",
    className: 'button-minimal',
};

export const FillSmall = Template.bind({});
FillSmall.args = {
    placeHolder: "Email",
    className: 'fill-sml',
};

export const FillMedium = Template.bind({});
FillMedium.args = {
    placeHolder: "Email",
    className: 'fill-med',
};

export const FillLarge = Template.bind({});
FillLarge.args = {
    placeHolder: "Email",
    className: 'fill-lar',
};

export const FillFull = Template.bind({});
FillFull.args = {
    placeHolder: "Email",
    className: 'fill-full',
};