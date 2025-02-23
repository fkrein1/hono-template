import type { ErrorHandler } from 'hono';
import type { ContentfulStatusCode } from 'hono/utils/http-status';

import { env } from 'hono/adapter';

import type { AppEnv } from '@/lib/types';

import { INTERNAL_SERVER_ERROR, OK } from '@/utils/http-status/http-status-codes';

export const onError: ErrorHandler = (err, c) => {
  const currentStatus = 'status' in err
    ? err.status
    : c.newResponse(null).status;
  const statusCode = currentStatus !== OK
    ? (currentStatus as ContentfulStatusCode)
    : INTERNAL_SERVER_ERROR;
  const { ENVIRONMENT } = env<AppEnv>(c);
  return c.json(
    {
      message: err.message,
      stack: ENVIRONMENT === 'production'
        ? undefined
        : err.stack,
    },
    statusCode,
  );
};
