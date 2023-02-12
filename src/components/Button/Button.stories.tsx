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
        iconPath: { control: 'path' },
        fontSize: { control: 'text' }
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Minimal = Template.bind({});
Minimal.args = {
    label: "Submit",
    className: 'btn-min',
};

export const Modern = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Modern.args = {
    label: "Submit",
    className: 'btn-mod',
};

export const Rounded = Template.bind({});
Rounded.args = {
    label: "Submit",
    className: 'btn-min btn-rnd',
};

export const textOnly = Template.bind({});
textOnly.args = {
    label: "Submit",
    className: 'btn-text-only',
};

export const Circle = Template.bind({});
Circle.args = {
    label: "Submit",
    className: 'btn-mod btn-cir btn-red',
};

export const Lifted = Template.bind({});
Lifted.args = {
    label: "Submit",
    className: 'btn-mod btn-lifted',
};

export const Underlined = Template.bind({});
Underlined.args = {
    label: "Underlined",
    className: 'btn-underlined'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: "Submit",
    className: 'btn-min btn-with-icon',
    iconPath: 'https://cdn0.iconfinder.com/data/icons/basic-glyph/1024/upload-512.png'
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
    label: "Submit",
    className: 'btn-min btn-with-icon-right',
    iconPath: 'https://cdn0.iconfinder.com/data/icons/basic-glyph/1024/upload-512.png'
};

export const IconOnly = Template.bind({});
IconOnly.args = {
    className: 'btn-icon-only',
    iconPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DjRBYoqXZVkAwqiVnexMpaULNFG8W6YNSA&usqp=CAU'
}

export const FillSmall = Template.bind({});
FillSmall.args = {
    label: "Submit",
    className: 'btn-min fill-sml',
};

export const FillMedium = Template.bind({});
FillMedium.args = {
    label: "Submit",
    className: 'btn-mod fill-med',
};

export const FillLarge = Template.bind({});
FillLarge.args = {
    label: "Submit",
    className: 'btn-min fill-lar',
};

export const FillFull = Template.bind({});
FillFull.args = {
    label: "Submit",
    className: 'btn-min fill-full',
};

export const fontSize = Template.bind({});
fontSize.args = {
    label: "Submit",
    className: 'btn-min',
    fontSize: '2rem',
};

export const buttonRed = Template.bind({});
buttonRed.args = {
    label: "Submit",
    className: 'btn-mod btn-red',
};

export const buttonGreen = Template.bind({});
buttonGreen.args = {
    label: "Submit",
    className: 'btn-mod btn-green',
};

export const buttonYellow = Template.bind({});
buttonYellow.args = {
    label: "Submit",
    className: 'btn-mod btn-yellow btn-fill-med',
    textColor: 'black'
};

export const buttonOrange = Template.bind({});
buttonOrange.args = {
    label: "BUTTON",
    className: 'btn-mod btn-orange btn-fill-lar',
    fontSize: '2rem',
    borderColor: 'red',

};