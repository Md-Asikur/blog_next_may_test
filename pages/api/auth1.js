import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Add more providers if needed
  ],

  // Optional: Add callbacks or custom functions
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      // Here, you can customize the token and add additional properties
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
    async session(session, token) {
      // Here, you can customize the session object
      session.user.userId = token.userId;
      return session;
    },
  },

  // Optional: Add additional NextAuth.js options
  // For example, you can specify a custom session encryption secret
  secret: process.env.AUTH_SECRET,
};

export default (req, res) => NextAuth(req, res, options);
