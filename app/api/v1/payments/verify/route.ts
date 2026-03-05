import { resOk,resErr } from '@/lib/api';import { PaymentService } from '@/services/payment.service';
export async function GET(req:Request){const {searchParams}=new URL(req.url);try{return resOk(await PaymentService.verifyPayment(searchParams.get('provider') as any,searchParams.get('ref')!));}catch(e){return resErr('PAYMENT_VERIFY_FAILED','Unable to verify',String(e));}}
