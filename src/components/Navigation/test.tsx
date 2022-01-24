import { render, screen } from '@testing-library/react';

import Navigation from '.';

describe('<Navigation />', () => {
  it('should render the heading', () => {
    const { container } = render(<Navigation />);

    expect(
      screen.getByRole('heading', { name: /Navigation/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
