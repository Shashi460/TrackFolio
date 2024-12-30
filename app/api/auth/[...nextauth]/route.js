import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcrypt"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        // Here you would typically check against your database
        // For now, we'll use a simple check
        const validEmail = "test@example.com";
        const validPassword = await bcrypt.hash("password123", 10);

        const isValidPassword = await bcrypt.compare(
          credentials.password,
          validPassword
        );

        if (credentials.email === validEmail && isValidPassword) {
          return {
            id: '1',
            name: 'Test User',
            email: validEmail,
          }
        }

        throw new Error('Invalid credentials');
      }
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }