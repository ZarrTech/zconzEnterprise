import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { db } from './db';
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: 'jwt' },
  providers: [Credentials({
    credentials: { email: {}, password: {} },
    authorize: async (credentials) => {
      const user = await db.user.findUnique({ where: { email: credentials.email as string } });
      if (!user) return null;
      const valid = await bcrypt.compare(credentials.password as string, user.passwordHash);
      if (!valid) return null;
      return { id: user.id, email: user.email, role: user.role } as any;
    }
  })],
  callbacks: {
    jwt: async ({ token, user }) => { if (user) token.role = (user as any).role; return token; },
    session: async ({ session, token }) => { (session.user as any).id = token.sub; (session.user as any).role = token.role; return session; }
  }
});
export function requireRole(roles: string[], role?: string){ if(!role || !roles.includes(role)) throw new Error('FORBIDDEN'); }
