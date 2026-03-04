import { db } from '@/lib/db';import { resOk } from '@/lib/api';
export async function PATCH(req:Request,{params}:{params:{id:string}}){const b=await req.json();return resOk(await db.cartItem.update({where:{id:params.id},data:{quantity:b.quantity}}));}
export async function DELETE(_:Request,{params}:{params:{id:string}}){await db.cartItem.delete({where:{id:params.id}});return resOk({deleted:true});}
