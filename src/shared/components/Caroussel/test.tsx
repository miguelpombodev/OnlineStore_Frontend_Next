import { render, screen } from '@testing-library/react';

import Caroussel from '.';

describe('<Caroussel />', () => {
  it('should render the heading', () => {
    const { container } = render(<Caroussel />);

    expect(
      screen.getByRole('heading', { name: /Caroussel/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
