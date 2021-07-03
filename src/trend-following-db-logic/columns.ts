import { IColumn } from '../components/GenericGrid/IColumn';

const columns: IColumn[] = [
  {
    path: ['StockCode'],
    text: 'STOCK CODE',
    type: 'text',
  },
  {
    path: ['SMA50'],
    text: 'SMA 50',
    type: 'text',
  },
  {
    path: ['SMA100'],
    text: 'SMA 100',
    type: 'text',
  },
  {
    path: ['ClosePrice'],
    text: 'CLOSE PRICE',
    type: 'text',
  },
  {
    path: ['HighestClosePrice50'],
    text: 'CLOSE PRICE 50',
    type: 'text',
  },
  {
    path: ['ClosePriceDiff'],
    text: 'CLOSE PRICE DIFF',
    type: 'text',
  },
  {
    path: ['AverageValue50'],
    text: 'AVERAGE VALUE 50',
    type: 'text',
  },
];

export default columns;
