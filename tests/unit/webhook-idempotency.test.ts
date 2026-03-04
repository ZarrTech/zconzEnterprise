import { describe,it,expect,vi } from 'vitest';
vi.mock('@/lib/db',()=>({db:{webhookEvent:{findUnique:vi.fn().mockResolvedValue(null),create:vi.fn()}}}));
import { PaymentService } from '@/services/payment.service';
describe('webhook idempotency',()=>{it('stores once',async()=>{const r=await PaymentService.handleWebhook('PAYSTACK',new Headers(),'{}');expect(r.idempotent).toBe(false);});});
