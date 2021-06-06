import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { PageContent, PageTitle } from '../components/Page';
import Trends from './components/Trends';
import { ITrend } from './interfaces';
import { trendsState } from './selectors';

export default () => {
  const trendsLoadable = useRecoilValueLoadable(trendsState);
  const { contents, state } = trendsLoadable;
  return (
    <PageContent>
      <PageTitle>TREND FOLLOWING</PageTitle>
      {state === 'hasValue' && (<Trends trends={contents as ITrend[]} />)}
      {state === 'loading' && (<div>Loading...</div>)}
    </PageContent>
  );
};
