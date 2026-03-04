import { describe,it,expect,vi } from 'vitest';
vi.mock('@/lib/db',()=>({db:{$transaction:async(fn:any)=>fn({inventory:{findUnique:vi.fn().mockResolvedValue({quantity:10,reserved:2}),update:vi.fn().mockResolvedValue({reserved:3})}})}}));
import { reserveInventory } from '@/repositories/inventory.repository';
describe('inventory reservation',()=>{it('reserves stock',async()=>{const r=await reserveInventory('p1',1);expect(r.reserved).toBe(3);});});
