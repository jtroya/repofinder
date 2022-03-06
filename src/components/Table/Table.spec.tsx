import { render } from '@testing-library/react';

import { RepoProps } from '../ListResults';
import { Table } from './Table';

describe('<Table />', () => {
  // Note: Table component from AntD is getting the error:
  // TypeError: window.matchMedia is not a function.
  // Pending to solve
  it.skip('should render the component', () => {
    const mockData: RepoProps[] = [
      {
        id: '123',
        name: 'test name',
        stargazerCount: 2,
        forkCount: 1,
        resourcePath: '/test-name',
      },
    ];
    const { getByRole } = render(<Table data={mockData} />);
    expect(getByRole(/table/i)).toBeInTheDocument();
  });
});
