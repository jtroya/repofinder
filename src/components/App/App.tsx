import { useLazyQuery } from '@apollo/client';
import { Layout } from 'antd';

import Search from '../Search';
import ListResults from '../ListResults';
import { REPO_QUERY } from './AppQueries';
import { StyledLayout, StyledContent, StyledSection } from './styles';
import './App.css';

function App(): JSX.Element {
  const [setVariables, { loading, error, data }] = useLazyQuery(REPO_QUERY);
  const handleSearch = (param: string): void => {
    setVariables({
      variables: {
        repo_name: param,
        last_cursor: null,
      },
    });
  };
  const { Header, Footer } = Layout;

  return (
    <StyledLayout>
      <Header>
        <Search onSearch={handleSearch} loading={loading} />
      </Header>
      <StyledContent>
        <StyledSection>
          {loading && <p data-testid="loading">Loading ...</p>}
          {error && <p data-testid="error">Error {error.message}</p>}
          {data?.search && (
            <ListResults
              results={data.search.nodes}
              totalCount={data.search.repositoryCount}
            />
          )}
        </StyledSection>
      </StyledContent>
      <Footer>
        <span>footer</span>
      </Footer>
    </StyledLayout>
  );
}

export default App;
