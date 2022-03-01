import { Story, Meta } from '@storybook/react/types-6-0';
import CarrouselContainer from '.';

export default {
  title: 'CarrouselContainer',
  component: CarrouselContainer
} as Meta;

export const Basic: Story = (args) => <CarrouselContainer {...args} />;
