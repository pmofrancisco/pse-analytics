export interface IApiClient {
  _root: string;
};

export interface IStockCode {
  StockCode: string;
};

export class BaseApiClient implements IApiClient {
  _root: string;

  constructor (root: string) {
    this._root = root;
  }
};