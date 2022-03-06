import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import App from './App';
import { REPO_QUERY } from './AppQueries';

describe('<App />', () => {
  const mockData = [
    {
      request: {
        query: REPO_QUERY,
        variables: {
          repo_name: 'test',
          last_cursor: null,
        },
      },
      result: {
        data: {
          search: {
            repositoryCount: 1,
            pageInfo: {
              startCursor: 'abc123',
              hasNextPage: false,
              endCursor: 'abc123',
            },
            nodes: [
              {
                name: 'repo1',
                stargazerCount: 0,
                forkCount: 0,
                resourcePath: '/repomock',
                updatedAt: '2018-01-02T18:09:05Z',
                __typename: 'Repository',
              },
            ],
          },
        },
      },
    },
  ];
  it('should render App', () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mockData} addTypename={false}>
        <App />
      </MockedProvider>
    );

    expect(getByTestId(/input-search/i)).toBeInTheDocument();
    expect(getByTestId(/submit-search/i)).toBeInTheDocument();
  });
});
