import { OpenAPIHono } from '@hono/zod-openapi';
import { logger } from 'hono/logger';

import { notFound, onError, serveEmojiFavicon } from '@/middlewares';
import { defaultHook } from '@/openapi/default-hook';

import type { AppBindings } from './types';

export function createRouter() {
  return new OpenAPIHono<AppBindings>({ strict: false, defaultHook });
}

export function createApp() {
  const app = createRouter();

  app.notFound(notFound);
  app.onError(onError);
  app.use(logger());
  app.use(serveEmojiFavicon('👾'));

  return app;
}
