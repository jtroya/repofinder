import React from 'react';
import { Button, Input } from 'antd';

import { StyledForm } from './styles';

export interface SearchProps {
  onSearch(args: string): void;
  placeholder?: string;
  loading?: boolean;
}

export const Search: React.FunctionComponent<SearchProps> = ({
  onSearch,
  placeholder = 'type a repository name',
  loading = false,
}: SearchProps) => {
  const [keyword, setKeyword] = React.useState('');
  const [disableSearch, setDisabledSearch] = React.useState(true);
  const minInputLen = 3;

  const handleOnChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(value);
    setDisabledSearch(value.length < minInputLen);
  };

  const handleSearch = (event: React.MouseEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (keyword !== '' && !disableSearch) {
      onSearch(keyword);
    }
  };
  return (
    <StyledForm onSubmit={handleSearch}>
      <Input
        aria-label="input"
        type="search"
        value={keyword}
        onChange={handleOnChange}
        placeholder={placeholder}
        data-testid="input-search"
        size="small"
      />
      <Button
        type="primary"
        data-testid="submit-search"
        disabled={disableSearch || loading}
        onClick={handleSearch}
        size="small"
        loading={loading}
      >
        Search
      </Button>
    </StyledForm>
  );
};
