import { getServerSession } from "next-auth"
import { authConfig } from "@/app/auth.config"

export default async function ServerProfile() {
  const session = await getServerSession(authConfig)

  if (!session) {
    return <div>Please sign in to view this content</div>
  }

  return (
    <div>
      <h1>Server Side Profile</h1>
      <p>Welcome {session.user.name}</p>
      <p>Email: {session.user.email}</p>
    </div>
  )
} 