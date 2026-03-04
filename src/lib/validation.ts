import { z } from 'zod';
export const registerSchema = z.object({ email: z.string().email(), password: z.string().min(8) });
export const loginSchema = registerSchema;
export const shipmentSchema = z.object({ senderAddress:z.string().min(2), receiverAddress:z.string().min(2), amount:z.number().int().positive().default(0) });
export const paymentInitSchema = z.object({ orderReference:z.string(), provider:z.enum(['PAYSTACK','FLUTTERWAVE','STRIPE','PAYPAL']), returnUrl:z.string().url() });
