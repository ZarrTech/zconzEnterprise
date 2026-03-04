import { db } from '@/lib/db';import { resOk } from '@/lib/api';
export async function POST(req:Request,{params}:{params:{trackingId:string}}){const b=await req.json();return resOk(await db.shipment.update({where:{trackingId:params.trackingId},data:{courier:b.courier}}));}
