import { getRequest } from './api-requests';
import { BaseApiClient, IStockCode } from './base-objects';

export interface ITrendFollowing extends IStockCode {
  AverageValue50: number;
  ClosePrice: number;
  ClosePriceDiff: number;
  HighestClosePrice50: number;
  SMA50: number;
  SMA100: number;
};

export class TrendFollowingClient extends BaseApiClient {
  get = async () => await getRequest<ITrendFollowing[]>(this._root);
};
