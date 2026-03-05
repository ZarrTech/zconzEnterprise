import { db } from '@/lib/db';import { resOk } from '@/lib/api';
export async function GET(){const user=await db.user.findFirst();return resOk(await db.address.findMany({where:{userId:user?.id}}));}
export async function POST(req:Request){const user=await db.user.findFirst();const b=await req.json();return resOk(await db.address.create({data:{userId:user!.id,line1:b.line1,city:b.city,country:b.country,postalCode:b.postalCode}}));}
