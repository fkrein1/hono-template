declare module 'bun' {
  interface Env {
    CLOUDFLARE_ACCOUNT_ID: string;
    CLOUDFLARE_DATABASE_ID: string;
    CLOUDFLARE_D1_TOKEN: string;
  }
}
