// Import necessary modules
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Define authentication options
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Add the access token to the token if available
      if (account) {
        token.accessToken = account.access_token;
      }
      console.log('JWT Callback - Token:', token);
      return token;
    },
    async session({ session, token }) {
      // Add the access token to the session if available
      session.accessToken = token.accessToken;
      console.log('Session Callback - Session:', session);
      return session;
    },
  },
};

// Initialize NextAuth with the authentication options
const handler = NextAuth(authOptions);

// Export the handler for both GET and POST requests
export { handler as GET, handler as POST };
