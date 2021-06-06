import { DailyQuotesClient } from './daily-quotes-client';

export const dailyQuotesClient = new DailyQuotesClient('/daily-quotes');

export type LoadableState = 'hasError' | 'hasValue' | 'loading';
