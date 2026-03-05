import { Worker } from 'bullmq';import IORedis from 'ioredis';import { logger } from '@/lib/logger';
const c = new IORedis(process.env.REDIS_URL ?? 'redis://localhost:6379');
['webhooks','payments','notifications','inventory','logistics'].forEach(name=>new Worker(name, async job=>{logger.info({queue:name,job:job.name,data:job.data},'processed');},{connection:c}));
logger.info('Worker started');
