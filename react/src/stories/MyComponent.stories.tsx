import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyComponent } from './MyComponent';

export default {
  title: 'Example/MyComponent',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;
const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

