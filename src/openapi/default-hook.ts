import type { Hook } from '@hono/zod-openapi';

import { HTTP_STATUS_CODES } from '@/utils/http-status';

export const defaultHook: Hook<any, any, any, any> = (result, c) => {
  if (!result.success) {
    return c.json(
      {
        success: result.success,
        error: result.error,
      },
      HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY,
    );
  }
};
