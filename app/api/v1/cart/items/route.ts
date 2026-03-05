import { db } from '@/lib/db';import { resOk } from '@/lib/api';
export async function POST(req:Request){const user=await db.user.findFirst();const b=await req.json();const cart=await db.cart.upsert({where:{id:'default-cart'},update:{},create:{id:'default-cart',userId:user!.id}}).catch(async()=>db.cart.findFirst({where:{userId:user!.id}}));return resOk(await db.cartItem.create({data:{cartId:cart!.id,productId:b.productId,quantity:b.quantity??1}}));}
export async function GET(){const cart=await db.cart.findFirst({include:{items:{include:{product:true}}}});return resOk(cart);}
