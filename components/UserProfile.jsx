"use client"
import { useSession } from "next-auth/react"

export default function UserProfile() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "unauthenticated") {
    return <div>Please sign in</div>
  }
  return (
    <div>
      <p>Welcome {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
    </div>
  )
} 