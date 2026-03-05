import { PrismaClient, Role, OrderStatus, OrderType, PaymentProvider, PaymentStatus, ShipmentStatus, TicketStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction([
    prisma.ticketMessage.deleteMany(), prisma.proofOfDelivery.deleteMany(), prisma.trackingEvent.deleteMany(), prisma.shipment.deleteMany(), prisma.refund.deleteMany(), prisma.payment.deleteMany(), prisma.orderItem.deleteMany(), prisma.order.deleteMany(), prisma.cartItem.deleteMany(), prisma.cart.deleteMany(), prisma.inventory.deleteMany(), prisma.productImage.deleteMany(), prisma.product.deleteMany(), prisma.review.deleteMany(), prisma.newsletterSubscriber.deleteMany(), prisma.cryptoTicket.deleteMany(), prisma.supportTicket.deleteMany(), prisma.address.deleteMany(), prisma.customerProfile.deleteMany(), prisma.auditLog.deleteMany(), prisma.webhookEvent.deleteMany(), prisma.user.deleteMany()
  ]);
  const admin = await prisma.user.create({ data: { email: 'admin@zeconz.local', passwordHash: await bcrypt.hash('Admin123!', 10), role: Role.ADMIN, profile: { create: { fullName: 'Admin User', phone: '+2340001' } } } });
  const customer = await prisma.user.create({ data: { email: 'user@zeconz.local', passwordHash: await bcrypt.hash('User123!', 10), role: Role.CUSTOMER, profile: { create: { fullName: 'Jane Customer', phone: '+2340002' } }, addresses: { create: [{ line1: '12 Marina', city: 'Lagos', country: 'NG' }, { line1: '5 Unity Ave', city: 'Abuja', country: 'NG' }] } } });

  for (let i = 1; i <= 12; i++) await prisma.product.create({ data: { name: `Produce ${i}`, description: `Fresh produce item ${i}`, category: i % 2 ? 'Vegetables' : 'Fruits', price: 1000 + i * 100, images: { create: [{ url: `https://picsum.photos/seed/prod${i}/800/600` }] }, inventory: { create: { quantity: 100 + i, reserved: 0 } } } });
  await prisma.review.createMany({ data: [{ name: 'Amina', rating: 5, comment: 'Fast delivery and quality produce.' }, { name: 'Tobi', rating: 4, comment: 'Crypto desk support was responsive.' }, { name: 'Chioma', rating: 5, comment: 'Unified dashboard is brilliant.' }] });
  await prisma.newsletterSubscriber.create({ data: { email: 'hello@example.com' } });

  for (let i = 1; i <= 3; i++) {
    const shipment = await prisma.shipment.create({ data: { trackingId: `ZEC-${String(i).padStart(4, '0')}`, senderAddress: 'Warehouse A', receiverAddress: `Customer ${i}`, status: i === 3 ? ShipmentStatus.DELIVERED : ShipmentStatus.IN_TRANSIT } });
    await prisma.trackingEvent.createMany({ data: [{ shipmentId: shipment.id, status: ShipmentStatus.CREATED, note: 'Shipment created' }, { shipmentId: shipment.id, status: ShipmentStatus.PICKED_UP, note: 'Picked up' }, { shipmentId: shipment.id, status: shipment.status, note: 'Current status' }] });
  }

  for (let i = 1; i <= 2; i++) {
    const ref = `ZEC-ORD-${new Date().getFullYear()}-${String(i).padStart(6, '0')}`;
    const order = await prisma.order.create({ data: { reference: ref, userId: customer.id, type: OrderType.PRODUCE, status: OrderStatus.PROCESSING, total: 5000 } });
    await prisma.orderItem.create({ data: { orderId: order.id, name: 'Produce Basket', qty: 2, amount: 2500 } });
    await prisma.payment.create({ data: { orderId: order.id, provider: PaymentProvider.PAYSTACK, status: PaymentStatus.SUCCESS, ref: `${ref}-PAY`, verifiedAt: new Date() } });
  }

  for (let i = 1; i <= 2; i++) {
    const ref = `ZEC-CRY-${new Date().getFullYear()}-${String(i).padStart(6, '0')}`;
    await prisma.cryptoTicket.create({ data: { reference: ref, userId: customer.id, action: 'BUY', asset: i === 1 ? 'BTC' : 'USDT', network: 'TRC20', amount: 100 * i, payoutAddress: 'TXYZ123', status: i === 1 ? TicketStatus.PENDING_REVIEW : TicketStatus.IN_PROGRESS } });
  }

  await prisma.auditLog.create({ data: { actorId: admin.id, entity: 'seed', entityId: 'bootstrap', action: 'CREATE' } });
}

main().finally(() => prisma.$disconnect());
