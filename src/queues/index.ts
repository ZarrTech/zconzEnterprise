import { Queue } from 'bullmq';import IORedis from 'ioredis';
const c = new IORedis(process.env.REDIS_URL ?? 'redis://localhost:6379');
export const webhooksQueue = new Queue('webhooks',{connection:c});
export const paymentsQueue = new Queue('payments',{connection:c});
export const notificationsQueue = new Queue('notifications',{connection:c});
export const inventoryQueue = new Queue('inventory',{connection:c});
export const logisticsQueue = new Queue('logistics',{connection:c});
