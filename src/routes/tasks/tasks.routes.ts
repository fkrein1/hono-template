import { createRoute, z } from '@hono/zod-openapi';

import { jsonContent } from '@/openapi/helpers';
import { HTTP_STATUS_CODES } from '@/utils/http-status';

const tags = ['Tasks'];

export const list = createRoute({
  path: '/tasks',
  method: 'get',
  tags,
  responses: {
    [HTTP_STATUS_CODES.OK]: jsonContent(
      z.string().array(),
      'The list of tasks',
    ),
  },
});

export type ListRoute = typeof list;
