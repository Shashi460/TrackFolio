import { getServerSession } from "next-auth"
import { authConfig } from "@/app/auth.config"
import { NextResponse } from "next/server"

export async function GET() {
  const session = await getServerSession(authConfig)

  if (!session) {
    return NextResponse.json(
      { error: "You must be signed in to view this content" },
      { status: 401 }
    )
  }

  return NextResponse.json({ 
    user: session.user 
  })
} 