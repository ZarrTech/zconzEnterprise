import { LogisticsService } from '@/services/logistics.service';import { resOk } from '@/lib/api';
export async function PATCH(req:Request,{params}:{params:{trackingId:string}}){const b=await req.json();return resOk(await LogisticsService.updateStatus(params.trackingId,b.status,b.note));}
