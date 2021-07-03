import React from 'react';
import * as R from 'ramda';
import { IStockCode } from '../../api-client/base-objects';
import Grid from '../Grid';
import { IColumn } from './IColumn';

type ItemProps<RecordType extends IStockCode> = {
  columns: IColumn[];
  record: RecordType;
};

const Item = <RecordType extends IStockCode>({ columns, record }: ItemProps<RecordType>) => (
  <Grid.Row>
    {columns.map(({ path }, index) => (
      <Grid.Cell key={`${record.StockCode}-${index}`}>{R.path(path, record)}</Grid.Cell>
    ))}
  </Grid.Row>
);

export default Item;
