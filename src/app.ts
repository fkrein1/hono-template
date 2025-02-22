import { OpenAPIHono } from '@hono/zod-openapi';

import { notFound } from '@/middlewares';

export const app = new OpenAPIHono();

app.notFound(notFound);

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

export default app;
