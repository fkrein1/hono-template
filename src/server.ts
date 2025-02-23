import { createApp } from '@/lib/create-app';

import { configureOpenAPI } from './lib/configure-open-api';
import { tasksRouter } from './routes/tasks/tasks.index';

export const app = createApp();

const routes = [tasksRouter];

configureOpenAPI(app);

routes.forEach((route) => {
  app.route('/', route);
});

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

export default app;
