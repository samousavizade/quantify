import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from './prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';

// @ts-ignore
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  debug: true,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn() {
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      // if (account) {
      //     token.accessToken = account.access_token
      //     token.id = profile.id
      // }
      return token;
    },
    /////////////////////////////////////////////////////////////////////////////////////////
    //// When using database sessions, the User (user) object is passed as an argument.
    //// When using JSON Web Tokens for sessions, the JWT payload (token) is provided instead.
    /////////////////////////////////////////////////////////////////////////////////////////
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // session.accessToken = token.accessToken
      // session.user.id = token.id

      // @ts-ignore
      const result = await prisma.user.findUnique({
        where: {
          email: token.email,
        },
      });

      session.user = {
        ...session.user,
        ...result,
      };

      return session;
    },
  },
  providers: [
    Google,
    GitHub,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            password: true,
          },
        });

        if (user && user.password === credentials.password) {
          console.log('user fetched successfully.');
          return user;
        } else {
          if (!user) {
            throw new Error('User not found.');
          } else if (user.password !== credentials.password) {
            throw new Error('Password is incorrect.');
          }

          throw new Error('Username (mail) or address is incorrect.');
        }
      },
    }),
  ],
});
