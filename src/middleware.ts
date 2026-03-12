import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const env = (context.locals as any)?.runtime?.env ?? {};

  const keys = [
    'KEYSTATIC_GITHUB_CLIENT_ID',
    'KEYSTATIC_GITHUB_CLIENT_SECRET',
    'KEYSTATIC_SECRET',
  ] as const;

  for (const key of keys) {
    if (env[key] && !process.env[key]) {
      process.env[key] = env[key];
    }
  }

  return next();
});
