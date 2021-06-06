import React from 'react';
import Grid from '../../components/Grid';
import { ITrend } from '../interfaces';

type TrendsProps = {
  trends: ITrend[];
};

const Trends = ({ trends }: TrendsProps) => (
  <Grid>
    <Grid.Header>
      <Grid.HeaderItem>STOCK CODE</Grid.HeaderItem>
      <Grid.HeaderItem>SMA 50</Grid.HeaderItem>
      <Grid.HeaderItem>SMA 100</Grid.HeaderItem>
    </Grid.Header>
    {trends.map(({ StockCode, SMA50, SMA100 }) => (
      <Grid.Row key={StockCode}>
        <Grid.Cell>{StockCode}</Grid.Cell>
        <Grid.Cell>{SMA50}</Grid.Cell>
        <Grid.Cell>{SMA100}</Grid.Cell>
      </Grid.Row>
    ))}
  </Grid>
);

export default Trends;
