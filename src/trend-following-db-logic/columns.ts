import { IColumn, INumberColumn } from '../components/GenericGrid/IColumn';

const columns: IColumn[] = [
  {
    path: ['StockCode'],
    text: 'STOCK CODE',
    type: 'text',
  },
  {
    path: ['SMA50'],
    text: 'SMA 50',
    type: 'number',
  },
  {
    path: ['SMA100'],
    text: 'SMA 100',
    type: 'number',
  },
  {
    path: ['ClosePrice'],
    text: 'CLOSE PRICE',
    type: 'number',
  },
  {
    path: ['HighestClosePrice50'],
    text: 'CLOSE PRICE 50',
    type: 'number',
  },
  {
    path: ['ClosePriceDiff'],
    text: 'CLOSE PRICE DIFF',
    type: 'percent',
  },
  {
    decimalPlaces: 2,
    path: ['AverageValue50'],
    text: 'AVERAGE VALUE 50',
    type: 'number',
  } as INumberColumn,
];

export default columns;
