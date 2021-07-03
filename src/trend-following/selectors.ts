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
    const stocksWithSmas = stockCodes.map((StockCode) => {
      const dailyQuotesByStockCode = R.filter(R.propEq('StockCode', StockCode), dailyQuotes);
      const prices = dailyQuotesByStockCode.map(({ ClosePrice }) => ClosePrice);
      const [latestDailyQuote] = dailyQuotesByStockCode;
      const { ClosePrice } = latestDailyQuote;
      const ClosePrice50Day = R.apply(Math.max, R.slice(0, 50, prices));
      const { value: SMA50 } = sma(R.slice(0, 50, prices));
      const { value: SMA100 } = sma(R.slice(0, 100, prices));
      const BuySignal = ClosePrice >= ClosePrice50Day ? 'Yes' : 'No';
      return { BuySignal, ClosePrice, ClosePrice50Day, StockCode, SMA50, SMA100 } as ITrend;
    });
    const trends = R.filter(({ SMA50, SMA100 }) => SMA50 > SMA100, stocksWithSmas);
    return R.concat(
      R.filter(R.propEq('BuySignal', 'Yes'), trends),
      R.filter(R.propEq('BuySignal', 'No'), trends),
    );
  },
});