import { getServerSession } from "next-auth"
import { authConfig } from "@/app/auth.config"
import { redirect } from "next/navigation"

export default async function ProfilePage() {
  const session = await getServerSession(authConfig)

  if (!session) {
    redirect("/signin")
  }

  return (
    <div>
        <h1>Protected Page</h1>
        <p>You can only see this if you're signed in.</p>
        <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </div>
  )
} 