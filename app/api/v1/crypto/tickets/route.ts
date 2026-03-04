import { db } from '@/lib/db';import { resOk } from '@/lib/api';
export async function POST(req:Request){const user=await db.user.findFirst();const b=await req.json();const ref=`ZEC-CRY-${new Date().getFullYear()}-${String((await db.cryptoTicket.count())+1).padStart(6,'0')}`;return resOk(await db.cryptoTicket.create({data:{reference:ref,userId:user!.id,action:b.action,asset:b.asset,network:b.network,amount:b.amount,payoutAddress:b.payoutAddress,status:'CREATED'}}));}
export async function GET(){return resOk(await db.cryptoTicket.findMany({include:{messages:true}}));}
