import { render, screen } from '@testing-library/react';

import CarrouselContainer from '.';

describe('<CarrouselContainer />', () => {
  it('should render the heading', () => {
    const { container } = render(<CarrouselContainer />);

    expect(
      screen.getByRole('heading', { name: /CarrouselContainer/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
