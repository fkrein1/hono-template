import type { AppRouteHandler } from '@/lib/types';

import type { ListRoute } from './tasks.routes';

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const tasks = ['read', 'sleep', 'code'];
  return c.json(tasks);
};
