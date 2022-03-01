import { Story, Meta } from '@storybook/react/types-6-0';
import CarrouselBannerContainer from '.';

export default {
  title: 'CarrouselBannerContainer',
  component: CarrouselBannerContainer
} as Meta;

export const Basic: Story = (args) => <CarrouselBannerContainer {...args} />;
