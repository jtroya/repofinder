import { render } from '@testing-library/react';

import { Link } from './Link';

describe('<Link />', () => {
  it('should render an <a> tag', () => {
    const mockUrl = '/example';
    const name = 'name test';
    const { getByText } = render(<Link url={mockUrl} name={name} />);

    expect(getByText(/name test/i)).toBeInTheDocument();
  });
});
