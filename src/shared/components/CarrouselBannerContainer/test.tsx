import { render, screen } from '@testing-library/react';

import CarrouselBannerContainer from '.';

describe('<CarrouselBannerContainer />', () => {
  it('should render the heading', () => {
    const { container } = render(<CarrouselBannerContainer />);

    expect(
      screen.getByRole('heading', { name: /CarrouselBannerContainer/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
