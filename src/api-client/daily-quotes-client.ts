import { getRequest } from './api-requests';
import { BaseApiClient, IStockCode } from './base-objects';

export interface IDailyQuote extends IStockCode {
  ClosePrice: number;
  HighPrice: number;
  LowPrice: number;
  OpenPrice: number;
  QuoteDate: Date;
  Value: number;
  Volume: number;
};

export class DailyQuotesClient extends BaseApiClient {
  get = async () => await getRequest<IDailyQuote[]>(this._root);
};
