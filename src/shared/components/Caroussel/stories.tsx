import { Story, Meta } from '@storybook/react/types-6-0';
import Caroussel from '.';

export default {
  title: 'Caroussel',
  component: Caroussel
} as Meta;

export const Basic: Story = (args) => <Caroussel {...args} />;
