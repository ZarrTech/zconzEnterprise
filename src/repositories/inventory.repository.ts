import { db } from '@/lib/db';
export async function reserveInventory(productId:string, qty:number){
  return db.$transaction(async (tx)=>{
    const inv = await tx.inventory.findUnique({ where:{ productId } });
    if(!inv || inv.quantity - inv.reserved < qty) throw new Error('INSUFFICIENT_INVENTORY');
    return tx.inventory.update({ where:{ productId }, data:{ reserved: { increment: qty } } });
  });
}
