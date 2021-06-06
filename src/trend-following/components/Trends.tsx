import React from 'react';
import Grid from '../../components/Grid';
import { ITrend } from '../interfaces';
import { LoadableState } from '../../types';

type TrendsProps = {
  state: LoadableState;
  trends: ITrend[];
};

const Trends = ({ state, trends }: TrendsProps) => (
  <Grid>
    <Grid.Header>
      <Grid.HeaderItem>STOCK CODE</Grid.HeaderItem>
      <Grid.HeaderItem>SMA 50</Grid.HeaderItem>
      <Grid.HeaderItem>SMA 100</Grid.HeaderItem>
    </Grid.Header>
    {state === 'hasValue' && trends.map(({ StockCode, SMA50, SMA100 }) => (
      <Grid.Row key={StockCode}>
        <Grid.Cell>{StockCode}</Grid.Cell>
        <Grid.Cell>{SMA50}</Grid.Cell>
        <Grid.Cell>{SMA100}</Grid.Cell>
      </Grid.Row>
    ))}
    {state === 'loading' && (<Grid.LoadingIndicator />)}
  </Grid>
);

export default Trends;
