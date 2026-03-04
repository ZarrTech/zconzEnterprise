import { rateLimit } from '@/lib/rate-limit';import { resErr,resOk } from '@/lib/api';
export async function POST(req:Request){if(!rateLimit('contact')) return resErr('RATE_LIMIT','Too many requests',null,429);const b=await req.json();return resOk({received:true,...b});}
