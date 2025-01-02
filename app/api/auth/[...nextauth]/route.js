import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          // This is where you would typically verify the credentials
          // For testing purposes, we'll accept any email/password
          if (credentials.email && credentials.password) {
            // Return a user object
            return {
              id: "1",
              email: credentials.email,
              name: credentials.email.split('@')[0], // Use email as name
            }
          }
          // If you return null or false, an error will be displayed
          return null
        } catch (error) {
          // If you throw, the error will be displayed
          throw new Error("Authentication failed")
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/signin',
    signUp: '/signup',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.email = token.email
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === 'development',
})

export { handler as GET, handler as POST }
