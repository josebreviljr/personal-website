export const prerender = false;

export async function GET(context: any) {
  const env = context.locals?.runtime?.env ?? {};
  return new Response(JSON.stringify({
    runtimeEnvKeys: Object.keys(env),
    runtime: {
      hasClientId:     !!env.KEYSTATIC_GITHUB_CLIENT_ID,
      hasClientSecret: !!env.KEYSTATIC_GITHUB_CLIENT_SECRET,
      hasSecret:       !!env.KEYSTATIC_SECRET,
    },
    processEnv: {
      hasClientId:     !!process.env.KEYSTATIC_GITHUB_CLIENT_ID,
      hasClientSecret: !!process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
      hasSecret:       !!process.env.KEYSTATIC_SECRET,
    },
  }, null, 2), { headers: { 'content-type': 'application/json' } });
}
