import { db } from '@/lib/db';
export const shipmentRepo = {
  list: ()=>db.shipment.findMany({include:{events:true}}),
  byTrackingId: (trackingId:string)=>db.shipment.findUnique({where:{trackingId},include:{events:true,pod:true}}),
  create: (data:any)=>db.shipment.create({data}),
  addEvent: (shipmentId:string,status:any,note?:string)=>db.trackingEvent.create({data:{shipmentId,status,note}})
};
