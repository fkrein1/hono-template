import type { OpenAPIHono, RouteConfig, RouteHandler } from '@hono/zod-openapi';

export interface AppEnv extends Record<string, unknown> {
  ENVIRONMENT: string;
}

export interface AppBindings {
  Bindings: {
    DB: D1Database;
  };
};

export type AppOpenAPI = OpenAPIHono<AppBindings>;

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<R, AppBindings>;
