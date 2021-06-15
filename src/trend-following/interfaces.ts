import { IStockCode } from '../api-client/base-objects';

export interface ITrend extends IStockCode {
  BuySignal: string;
  ClosePrice50Day: number;
  ClosePrice: number;
  SMA50: number;
  SMA100: number;
};
