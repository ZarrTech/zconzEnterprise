export const cn = (...x: (string|false|undefined)[]) => x.filter(Boolean).join(' ');
export const ok = (data: unknown, requestId='req-local') => ({ ok:true, data, meta:{ requestId } });
export const err = (code:string, message:string, details?:unknown, requestId='req-local') => ({ ok:false, error:{ code, message, details }, meta:{ requestId } });
