import { apiReference } from '@scalar/hono-api-reference';

import type { AppOpenAPI } from './types';

import packageJSON from '../../package.json';

export function configureOpenAPI(app: AppOpenAPI) {
  app.doc('docs', {
    openapi: '3.0.0',
    info: {
      version: packageJSON.version,
      title: "Tasks API",
    },
  });

  app.get(
    '/reference',
    apiReference({
      theme: 'purple',
      layout: 'classic',
      hiddenClients: { php: true, python: true, c: true, go: true, java: true, ruby: true, clojure: true, csharp: true, kotlin: true, objc: true, swift: true, r: true, powershell: true, ocaml: true, curl: true, dart: true, http: true, node: true },
      spec: {
        url: '/docs',
      },
    }),
  );
}
