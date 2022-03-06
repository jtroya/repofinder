import { useLayoutEffect, useState } from 'react';
import { Table as AntTable } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { RepoProps } from '../ListResults';
import Link from '../Link';

export interface RowProps {
  key: string;
  name: JSX.Element;
  stargazerCount: number;
  forkCount: number;
  resourcePath: string;
}

export interface TableProps {
  data?: RepoProps[] | undefined;
}

export const Table: React.FunctionComponent<TableProps> = ({ data }) => {
  const [nData, setData] = useState<RowProps[] | undefined>();
  const columns: ColumnsType<RowProps> = [
    {
      title: 'Repository name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Starts',
      dataIndex: 'stargazerCount',
      key: 'stargazerCount',
    },
    {
      title: 'Forks',
      dataIndex: 'forkCount',
      key: 'forkCount',
    },
  ];
  useLayoutEffect(() => {
    if (!data) {
      return;
    }
    const normalizedResults = data.map(item => ({
      key: item.id,
      name: <Link url={item.resourcePath} name={item.name} />,
      stargazerCount: item.stargazerCount,
      forkCount: item.forkCount,
    }));
    setData(normalizedResults as RowProps[]);
  }, [data]);

  if (!data) {
    return null;
  }
  return <AntTable columns={columns} dataSource={nData} aria-label="table" />;
};
