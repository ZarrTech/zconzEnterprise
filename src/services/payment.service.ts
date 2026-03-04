import { db } from '@/lib/db';
import { providerFactory } from '@/providers/payment.providers';
import { PaymentProvider, PaymentStatus, OrderStatus, OrderType, ShipmentStatus, TicketStatus } from '@prisma/client';

export const PaymentService = {
  async initializePayment(orderReference:string, provider:PaymentProvider, returnUrl:string){
    const order = await db.order.findUnique({where:{reference:orderReference}}); if(!order) throw new Error('ORDER_NOT_FOUND');
    const gateway = providerFactory(provider); const init = await gateway.initializePayment(orderReference, returnUrl);
    await db.payment.upsert({ where:{orderId:order.id}, create:{orderId:order.id,provider,ref:init.ref,status:PaymentStatus.PENDING}, update:{provider,ref:init.ref,status:PaymentStatus.PENDING} });
    await db.order.update({ where:{id:order.id}, data:{status:OrderStatus.PENDING_PAYMENT} });
    return init;
  },
  async verifyPayment(provider:PaymentProvider, ref:string){
    const gateway = providerFactory(provider); const res = await gateway.verifyPayment(ref);
    if(res.status!=='SUCCESS') return res;
    const payment = await db.payment.findUnique({ where:{ref}, include:{order:true} }); if(!payment) throw new Error('PAYMENT_NOT_FOUND');
    if(payment.status===PaymentStatus.SUCCESS) return res;
    await db.$transaction(async tx=>{
      await tx.payment.update({ where:{id:payment.id}, data:{status:PaymentStatus.SUCCESS, verifiedAt:new Date()} });
      await tx.order.update({ where:{id:payment.orderId}, data:{status:OrderStatus.PAID} });
      if(payment.order.type===OrderType.SHIPMENT){
        const count = await tx.shipment.count();
        const trackingId = `ZEC-${String(count+1).padStart(4,'0')}`;
        const shipment = await tx.shipment.create({ data:{ trackingId, orderId:payment.orderId, senderAddress:'Auto sender', receiverAddress:'Auto receiver', status:ShipmentStatus.CREATED } });
        await tx.trackingEvent.create({ data:{ shipmentId:shipment.id, status:ShipmentStatus.CREATED, note:'Shipment created after payment' } });
      }
      if(payment.order.type===OrderType.CRYPTO){
        const count = await tx.cryptoTicket.count();
        await tx.cryptoTicket.create({ data:{ reference:`ZEC-CRY-${new Date().getFullYear()}-${String(count+1).padStart(6,'0')}`, userId:payment.order.userId, orderId:payment.orderId, action:'BUY', asset:'BTC', network:'BTC', amount:0.01, payoutAddress:'pending', status:TicketStatus.PENDING_REVIEW } });
      }
      if(payment.order.type===OrderType.PRODUCE){ await tx.order.update({where:{id:payment.orderId}, data:{status:OrderStatus.PROCESSING}}); }
    });
    return res;
  },
  async handleWebhook(provider:PaymentProvider, headers:Headers, rawBody:string){
    const gateway = providerFactory(provider); const {eventId, valid} = gateway.validateWebhook(headers, rawBody); if(!valid) throw new Error('INVALID_SIGNATURE');
    const existing = await db.webhookEvent.findUnique({ where:{eventId} }); if(existing) return {idempotent:true};
    await db.webhookEvent.create({ data:{ provider, eventId, payload: JSON.parse(rawBody || '{}'), signature: headers.get('x-signature') ?? 'none' } });
    return {idempotent:false,eventId};
  }
};
