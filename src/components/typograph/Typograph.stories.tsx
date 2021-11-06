import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OriginTypograph from './Typograph';

export default {
  title: 'Typograph',
  component: OriginTypograph,
  argTypes: {
    textAlign: {
      options: ['left', 'center', 'right'],
      control: { type: 'select' },
      defaultValue: 'left',
    },
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
  },
} as ComponentMeta<typeof OriginTypograph>;

const Template: ComponentStory<typeof OriginTypograph> = (args) => <OriginTypograph {...args} />;

export const Typograph = Template.bind({});
Typograph.args = {
  children: 'text',
};
