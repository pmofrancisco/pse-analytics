import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { ITrendFollowing } from '../api-client/trend-following-client';
import GenericGrid from '../components/GenericGrid';
import { PageContent, PageTitle } from '../components/Page';
import columns from './columns';
import { trendFollowingState } from './selectors';

export default () => {
  const trendsLoadable = useRecoilValueLoadable(trendFollowingState);
  const { contents, state } = trendsLoadable;
  return (
    <PageContent>
      <PageTitle>TREND FOLLOWING DB LOGIC</PageTitle>
      <GenericGrid columns={columns} records={contents as ITrendFollowing[]} state={state} />
    </PageContent>
  );
};
