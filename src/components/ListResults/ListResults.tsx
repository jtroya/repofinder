import Table from '../Table';

export interface RepoProps {
  id: string;
  name: string;
  stargazerCount: number;
  forkCount: number;
  resourcePath: string;
}

export interface ListResultsProps {
  results: RepoProps[];
  totalCount: number;
}

export const ListResults: React.FunctionComponent<ListResultsProps> = ({
  results,
  totalCount,
}: ListResultsProps) => {
  const hasResults = totalCount > 0;

  return (
    <div data-testid="results">
      {!hasResults && <p data-testid="no-results">There is no results</p>}
      {hasResults && <Table data={results} />}
      <p data-testid="total">total: {totalCount}</p>
    </div>
  );
};
