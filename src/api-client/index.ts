import { DailyQuotesClient } from './daily-quotes-client';
import { TrendFollowingClient } from './trend-following-client';

export const dailyQuotesClient = new DailyQuotesClient('/daily-quotes');
export const trendFollowingClient = new TrendFollowingClient('/trend-following');

export type LoadableState = 'hasError' | 'hasValue' | 'loading';
