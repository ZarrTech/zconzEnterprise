import { db } from '@/lib/db';import { resOk } from '@/lib/api';
export async function GET(){return resOk({orders:await db.order.count(),shipments:await db.shipment.count(),payments:await db.payment.count(),tickets:await db.cryptoTicket.count()});}
