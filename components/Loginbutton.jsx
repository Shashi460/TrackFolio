"use client"
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

const LoginButton = () => {
  const { data: session, status } = useSession()

  return (
    <div className="flex items-center">
      {status === "authenticated" ? (
        <div className="flex items-center gap-2 sm:gap-4 max-sm:flex-col">
          <div className="relative h-8 w-8 sm:h-10 sm:w-10">
            <Image 
              src={session?.user?.image} 
              alt="user" 
              fill
              className="rounded-full object-cover"
            />
          </div>
          
        </div>
      ) : (
        <Link 
          href="/signin" 
          className="bg-white text-indigo-600 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base 
            rounded-full hover:bg-gray-100 transition-colors duration-200 
            shadow-md font-montserrat font-semibold whitespace-nowrap"
        >
          Sign In
        </Link>
      )}
    </div>
  )
}
export default LoginButton