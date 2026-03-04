import { db } from '@/lib/db';import { resOk } from '@/lib/api';export async function GET(){return resOk(await db.payment.findMany({include:{order:true,refunds:true}}));}
