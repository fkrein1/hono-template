import { OpenAPIHono } from '@hono/zod-openapi';
import { logger } from 'hono/logger';

import { notFound, onError, serveEmojiFavicon } from '@/middlewares';
import { defaultHook } from '@/openapi/default-hook';

export function createRouter() {
  return new OpenAPIHono({ strict: false, defaultHook });
}

export function createApp() {
  const app = new OpenAPIHono({ strict: false });

  app.notFound(notFound);
  app.onError(onError);
  app.use(logger());
  app.use(serveEmojiFavicon('👾'));

  return app;
}
