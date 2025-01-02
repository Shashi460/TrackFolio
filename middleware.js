import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/signin",
    signUp:"/signup"
  },
})

export const config = {
  matcher: ['/'],
}
