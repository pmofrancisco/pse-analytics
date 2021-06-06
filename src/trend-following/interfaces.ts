import { IStockCode } from '../api-client/base-objects';

export interface ITrend extends IStockCode {
  SMA50: number;
  SMA100: number;
};
