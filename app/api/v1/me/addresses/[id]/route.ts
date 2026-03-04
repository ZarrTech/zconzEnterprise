import { db } from '@/lib/db';import { resOk } from '@/lib/api';
export async function PATCH(req:Request,{params}:{params:{id:string}}){const b=await req.json();return resOk(await db.address.update({where:{id:params.id},data:b}));}
export async function DELETE(_:Request,{params}:{params:{id:string}}){await db.address.delete({where:{id:params.id}});return resOk({deleted:true});}
