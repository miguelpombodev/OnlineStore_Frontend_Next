import { render, screen } from '@testing-library/react';

import SquaredTag from '.';

describe('<SquaredTag />', () => {
  it('should render the heading', () => {
    const { container } = render(<SquaredTag />);

    expect(
      screen.getByRole('heading', { name: /SquaredTag/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
