import { resOk } from '@/lib/api';import { LogisticsService } from '@/services/logistics.service';import { db } from '@/lib/db';import { shipmentSchema } from '@/lib/validation';
export async function POST(req:Request){const b=shipmentSchema.parse(await req.json());return resOk(await LogisticsService.createShipment({senderAddress:b.senderAddress,receiverAddress:b.receiverAddress}));}
export async function GET(){return resOk(await db.shipment.findMany({include:{events:true}}));}
