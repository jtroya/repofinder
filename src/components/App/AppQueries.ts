import { gql } from '@apollo/client';

export const REPO_QUERY = gql`
  query ($repo_name: String!, $last_cursor: String) {
    search(
      query: $repo_name
      after: $last_cursor
      type: REPOSITORY
      first: 10
    ) {
      repositoryCount
      pageInfo {
        startCursor
        hasNextPage
        endCursor
      }
      nodes {
        ... on Repository {
          id
          name
          stargazerCount
          forkCount
          resourcePath
        }
      }
    }
  }
`;
