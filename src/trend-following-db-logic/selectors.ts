import { selector } from 'recoil';
import { trendFollowingClient } from '../api-client';
import { ITrendFollowing } from '../api-client/trend-following-client';

export const trendFollowingState = selector<ITrendFollowing[]>({
  key: 'trendFollowingState',
  get: async () => await trendFollowingClient.get(),
});
