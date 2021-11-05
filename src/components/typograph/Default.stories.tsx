import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OriginDefault from './Default';

export default {
  title: 'Typograph',
  component: OriginDefault,
} as ComponentMeta<typeof OriginDefault>;

const Template: ComponentStory<typeof OriginDefault> = (args) => <OriginDefault {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'text',
};
