import { db } from '@/lib/db';
export const orderRepo = {
  byReference: (reference:string)=>db.order.findUnique({ where:{reference}, include:{payment:true,items:true} }),
  create: (data:any)=>db.order.create({ data }),
  updateStatus: (reference:string,status:any)=>db.order.update({ where:{reference}, data:{status} })
};
