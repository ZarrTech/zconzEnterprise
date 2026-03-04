import { ShipmentStatus } from '@prisma/client';import { shipmentRepo } from '@/repositories/shipment.repository';import { db } from '@/lib/db';
export const LogisticsService={
  async createShipment(data:{senderAddress:string;receiverAddress:string}){const count=await db.shipment.count();const trackingId=`ZEC-${String(count+1).padStart(4,'0')}`;const shipment=await shipmentRepo.create({trackingId,...data,status:ShipmentStatus.CREATED});await shipmentRepo.addEvent(shipment.id,ShipmentStatus.CREATED,'Shipment created');return shipment;},
  async updateStatus(trackingId:string,status:ShipmentStatus,note?:string){const shipment=await db.shipment.update({where:{trackingId},data:{status}});await shipmentRepo.addEvent(shipment.id,status,note);return shipment;}
};
