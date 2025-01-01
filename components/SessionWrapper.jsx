import { getServerSession } from "next-auth"
import SessionProvider from "./SessionProvider"

export default async function SessionWrapper({ children }) {
  const session = await getServerSession()
  
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
} 