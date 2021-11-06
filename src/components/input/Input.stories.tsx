import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OriginInput from './Input';

export default {
  title: 'Input',
  component: OriginInput,
  argTypes: {
    size: {
      options: ['large', 'normal', 'small'],
      control: { type: 'select' },
      defaultValue: 'normal',
    },
    value: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'placeholder',
    },
  },
} as ComponentMeta<typeof OriginInput>;

const Template: ComponentStory<typeof OriginInput> = (args) => <OriginInput {...args} />;

export const Input = Template.bind({});
