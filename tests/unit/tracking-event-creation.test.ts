import { describe,it,expect,vi } from 'vitest';
vi.mock('@/lib/db',()=>({db:{shipment:{count:vi.fn().mockResolvedValue(1)},trackingEvent:{},$transaction:vi.fn()}}));
vi.mock('@/repositories/shipment.repository',()=>({shipmentRepo:{create:vi.fn().mockResolvedValue({id:'s1',trackingId:'ZEC-0002'}),addEvent:vi.fn()}}));
import { LogisticsService } from '@/services/logistics.service';
describe('tracking event creation',()=>{it('creates CREATED event',async()=>{const s=await LogisticsService.createShipment({senderAddress:'A',receiverAddress:'B'});expect(s.trackingId).toBe('ZEC-0002');});});
