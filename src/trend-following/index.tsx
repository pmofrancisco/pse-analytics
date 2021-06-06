import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import GenericGrid from '../components/GenericGrid';
import { PageContent, PageTitle } from '../components/Page';
import columns from './columns';
import { ITrend } from './interfaces';
import { trendsState } from './selectors';

export default () => {
  const trendsLoadable = useRecoilValueLoadable(trendsState);
  const { contents, state } = trendsLoadable;
  return (
    <PageContent>
      <PageTitle>TREND FOLLOWING</PageTitle>
      <GenericGrid columns={columns} records={contents as ITrend[]} state={state} />
    </PageContent>
  );
};
