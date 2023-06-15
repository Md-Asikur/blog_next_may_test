import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Auth0 from "next-auth/providers/auth0";
import { getToken } from "next-auth/jwt";
import clientPromise from "@/lib/mongodb";
import Cookies from "js-cookie";
import { setCookie } from "nookies";

const options = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_DOMAIN,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // Add more providers if needed
  ],

  // ...
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
    strategy: "jwt",
  },

  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },
  // database: process.env.MONGO_URL,

  secret: process.env.JWT_SECRET,
  // Optional: Add callbacks or custom functions
  //   cookies: {
  //   sessionToken: {
  //     name: `token`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: 'strict',
  //       path: '/',
  //       secure: true
  //     }
  //   },

  // },
  callbacks: {
    async session({ session, token, user }) {
      // console.log("sess", session, token, user);
      // If an access token exists in the token object, add it to the session
      if (token) {
        session.user.id = token.sub;
      }

      return session;
    },
  },

  adapter: MongoDBAdapter(clientPromise),
  // ...
};

export default (req, res) => NextAuth(req, res, options);
