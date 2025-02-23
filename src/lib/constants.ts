import { createMessageObjectSchema } from '@/openapi/schemas';
import { HTTP_STATUS_PHRASES } from '@/utils/http-status';

export const ZOD_ERROR_MESSAGES = {
  REQUIRED: 'Required',
  EXPECTED_NUMBER: 'Expected number, received nan',
  NO_UPDATES: 'No updates provided',
};

export const ZOD_ERROR_CODES = {
  INVALID_UPDATES: 'invalid_updates',
};

export const notFoundSchema = createMessageObjectSchema(HTTP_STATUS_PHRASES.NOT_FOUND);
