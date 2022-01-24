import { Story, Meta } from '@storybook/react/types-6-0';
import Navigation from '.';

export default {
  title: 'Navigation',
  component: Navigation
} as Meta;

export const Basic: Story = (args) => <Navigation {...args} />;
