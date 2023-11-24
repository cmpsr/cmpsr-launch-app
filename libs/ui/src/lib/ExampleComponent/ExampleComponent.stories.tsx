import { Meta, StoryFn } from '@storybook/react';
import { ExampleComponent } from './ExampleComponent';

export default {
  component: ExampleComponent,
  title: 'ExampleComponent',
} as Meta;

const Template: StoryFn = (args) => <ExampleComponent {...args} />;
export const Playground = Template.bind({});
Playground.args = {};
