import '../../matchMedia.mock';
import { render, screen, cleanup } from '@testing-library/react';
import { ListResults, ListResultsProps } from './ListResults';

describe('<ListResults />', () => {
  // Note: Table component from AntD is getting the error:
  // TypeError: window.matchMedia is not a function.
  // Pending to solve

  beforeEach(() => cleanup());

  it.skip('should render default values', () => {
    const mockData: ListResultsProps = {
      results: [],
      totalCount: 0,
    };
    const { getByText } = render(<ListResults {...mockData} />);
    expect(getByText(/there is no results/i)).toBeInTheDocument();
    expect(getByText(/total: 0/i)).toBeInTheDocument();
  });

  it.skip('should render a result', () => {
    const mockData: ListResultsProps = {
      results: [
        {
          id: '123',
          name: 'test name',
          stargazerCount: 2,
          forkCount: 1,
          resourcePath: '/test-name',
        },
      ],
      totalCount: 1,
    };
    const { getAllByRole, getByText } = render(<ListResults {...mockData} />);
    screen.debug();

    expect(getAllByRole(/list/i)).toHaveLength(2);
    expect(getByText(/total: 1/i)).toBeInTheDocument();
  });
});
