import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

import { parsedEnv } from '@/env';

const redis = new Redis({ url: parsedEnv.KV_REST_API_URL, token: parsedEnv.KV_REST_API_TOKEN });

export const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(1, '15 m'),
  analytics: true,
  prefix: 'ratelimit'
});
