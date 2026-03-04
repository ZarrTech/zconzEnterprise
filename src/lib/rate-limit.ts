const mem = new Map<string,{count:number;ts:number}>();
export function rateLimit(key:string, limit=30, windowMs=60_000){const now=Date.now();const cur=mem.get(key);if(!cur||now-cur.ts>windowMs){mem.set(key,{count:1,ts:now});return true;}if(cur.count>=limit)return false;cur.count++;return true;}
