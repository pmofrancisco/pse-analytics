import { selector } from 'recoil';
import { dailyQuotesClient } from '../api-client';
import { IDailyQuote } from '../api-client/daily-quotes-client';

export const dailyQuotesState = selector<IDailyQuote[]>({
  key: 'dailyQuotesState',
  get: async () => await dailyQuotesClient.get(),
});
