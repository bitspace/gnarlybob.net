import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'gnarlybob-net'
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};
