import React from 'react';
import { LoadableState } from '../../api-client';
import { IStockCode } from '../../api-client/base-objects';
import Grid from '../Grid';
import { IColumn } from './IColumn';
import Item from './item';

type GenericGridProps<RecordType extends IStockCode> = {
  columns: IColumn[];
  records: RecordType[];
  state?: LoadableState;
};

const GenericGrid = <RecordType extends IStockCode>({ columns, records, state = 'hasValue' }: GenericGridProps<RecordType>) => (
  <Grid>
    <Grid.Header>
      {columns.map(({ text }) => (
        <Grid.HeaderItem>{text}</Grid.HeaderItem>
      ))}
    </Grid.Header>
    {state === 'hasValue' && records.map((record) => {
      const { StockCode } = record;
      return (<Item columns={columns} record={record} />)
    })}
    {state === 'loading' && (<Grid.LoadingIndicator />)}
  </Grid>
);

export default GenericGrid;
