import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { executeQuery } from "@/lib/db-utils"
import bcrypt from "bcryptjs"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          console.log("Attempting to authenticate:", credentials.email);
          
          const users = await executeQuery({
            query: 'SELECT * FROM users WHERE email = ?',
            values: [credentials.email],
          });
          
          console.log("Database response:", users);

          if (!users || users.length === 0) {
            console.log("No user found");
            throw new Error('No user found with this email');
          }

          const user = users[0];
          
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          
          console.log("Password validation:", isValid);

          if (!isValid) {
            console.log("Invalid password");
            throw new Error('Invalid password');
          }

          console.log("Authentication successful");
          
          return {
            id: user.id,
            email: user.email,
            name: user.name || user.email.split('@')[0],
          };
        } catch (error) {
          console.error("Authentication error:", error);
          throw error;
        }
      }
    })
  ],
  pages: {
    signIn: '/signin',
    error: '/auth/error',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          // Check if user exists
          const existingUser = await executeQuery({
            query: 'SELECT * FROM users WHERE email = ?',
            values: [user.email],
          });

          if (existingUser.length === 0) {
            // Create new user if doesn't exist
            await executeQuery({
              query: 'INSERT INTO users (email, name, google_id) VALUES (?, ?, ?)',
              values: [user.email, user.name, user.id],
            });
          }
          return true;
        } catch (error) {
          console.error("Error handling Google sign in:", error);
          return false;
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  },
  debug: process.env.NODE_ENV === 'development',
})

export { handler as GET, handler as POST }
