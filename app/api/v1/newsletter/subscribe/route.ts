import { db } from '@/lib/db';import { rateLimit } from '@/lib/rate-limit';import { resErr,resOk } from '@/lib/api';
export async function POST(req:Request){if(!rateLimit('newsletter')) return resErr('RATE_LIMIT','Too many requests',null,429);const b=await req.json();return resOk(await db.newsletterSubscriber.upsert({where:{email:b.email},update:{},create:{email:b.email}}));}
