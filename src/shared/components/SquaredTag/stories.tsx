import { Story, Meta } from '@storybook/react/types-6-0';
import SquaredTag from '.';

export default {
  title: 'SquaredTag',
  component: SquaredTag
} as Meta;

export const Basic: Story = (args) => <SquaredTag {...args} />;
