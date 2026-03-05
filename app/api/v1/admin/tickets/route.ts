import { db } from '@/lib/db';import { resOk } from '@/lib/api';export async function GET(){return resOk(await db.supportTicket.findMany({include:{messages:true}}));}
