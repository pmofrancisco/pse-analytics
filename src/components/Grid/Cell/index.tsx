import React from 'react';
import * as R from 'ramda';
import { IColumn } from '../../GenericGrid/IColumn';
import NumberCell from './NumberCell';
import PercentCell from './PercentCell';
import TextCell from './TextCell';

type CellProps = {
  column: IColumn;
  value: number | string;
};

export default ({ column, value }: CellProps) => {
  const { type } = column;
  switch (type) {
    case 'number':
      return (<NumberCell decimalPlaces={R.path(['decimalPlaces'], column)} value={value as number} />);
    case 'percent':
      return (<PercentCell value={value as number} />)
    default:
      return (<TextCell>{value}</TextCell>)
  };
};
