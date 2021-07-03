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
    {columns.map((column, index) => {
      const { path } = column;
      return (
        <Grid.Cell
          key={`${record.StockCode}-${index}`}
          column={column}
          value={R.path(path, record) as number | string}
        />
      );
    })}
  </Grid.Row>
);

export default Item;
