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
    text: 'Close Price',
    type: 'text',
  },
  {
    path: ['ClosePrice50Day'],
    text: 'Close Price 50',
    type: 'text',
  },
  {
    path: ['BuySignal'],
    text: 'Buy Signal',
    type: 'text',
  },
];

export default columns;
