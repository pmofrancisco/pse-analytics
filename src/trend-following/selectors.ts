import * as R from 'ramda';
import { selector } from 'recoil';
import sma from '../indicators/sma';
import { dailyQuotesState } from '../selectors/daily-quotes-selector';
import { ITrend } from './interfaces';

export const trendsState = selector<ITrend[]>({
  key: 'trendsState',
  get: async ({ get }) => {
    const dailyQuotes = await get(dailyQuotesState);
    const stockCodes = R.uniq(dailyQuotes.map(({ StockCode }) => StockCode));
    const trends = stockCodes.map((StockCode) => {
      const dailyQuotesByStockCode = R.filter(R.propEq('StockCode', StockCode), dailyQuotes);
      const { value: SMA50 } = sma(R.slice(0, 50, dailyQuotesByStockCode.map(({ ClosePrice }) => ClosePrice)));
      const { value: SMA100 } = sma(R.slice(0, 100, dailyQuotesByStockCode.map(({ ClosePrice }) => ClosePrice)));
      return { StockCode, SMA50, SMA100 } as ITrend;
    });
    return R.filter(({ SMA50, SMA100 }) => SMA50 > SMA100, trends);
  },
});