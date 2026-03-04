import { NextResponse } from 'next/server';
import { ZodSchema } from 'zod';
import { err, ok } from './utils';
export async function parseBody<T>(req: Request, schema: ZodSchema<T>) { const b = await req.json(); return schema.parse(b); }
export const resOk = (data:unknown)=>NextResponse.json(ok(data));
export const resErr = (code:string,message:string,details?:unknown,status=400)=>NextResponse.json(err(code,message,details),{status});
