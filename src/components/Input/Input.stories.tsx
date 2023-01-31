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
    label: "Email",
    className: 'button-minimal',
};

export const WithLabel = Template.bind({});
Minimal.args = {
    label: "Email",
    className: 'button-minimal',
};

export const FillSmall = Template.bind({});
FillSmall.args = {
    label: "Email",
    className: 'input-fill-sml',
};

export const FillMedium = Template.bind({});
FillMedium.args = {
    label: "Email",
    className: 'input-fill-med',
};

export const FillLarge = Template.bind({});
FillLarge.args = {
    label: "Email",
    className: 'input-fill-lar',
};

export const FillFull = Template.bind({});
FillFull.args = {
    label: "Email",
    className: 'input-fill-full',
};