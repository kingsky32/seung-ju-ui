import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OriginLink from './Link';

export default {
  title: 'Typograph/Link',
  component: OriginLink,
  argTypes: {
    size: {
      options: ['extra-large', 'large', 'big', 'normal', 'small'],
      control: { type: 'select' },
      defaultValue: 'normal',
    },
    weight: {
      options: ['thin', 'extra-light', 'light', 'regular', 'medium', 'bold', 'extra-bold', 'heavy', 'black'],
      control: { type: 'select' },
      defaultValue: 'regular',
    },
    href: {
      control: { type: 'text' },
      defaultValue: 'https://seung-ju.com',
    },
    target: {
      options: ['_blank', '_self', '_parent', '_top'],
      control: { type: 'select' },
      defaultValue: '_blank',
    },
  },
} as ComponentMeta<typeof OriginLink>;

const Template: ComponentStory<typeof OriginLink> = (args) => <OriginLink {...args} />;

export const Link = Template.bind({});
Link.args = {
  children: 'text',
};
