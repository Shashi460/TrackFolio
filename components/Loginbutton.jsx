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
          <div className="relative h-8 w-8 sm:h-10 sm:w-10 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-full flex justify-center items-center hover:from-red-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300">
              <p className='text-3xl  mb-1 text-white font-montserrat'>{session?.user?.name[0]}</p>
          </div>
      ) : (
        <Link 
          href="/signin" 
          className="bg-white text-indigo-600 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base 
            rounded-full shadow-md font-montserrat font-semibold whitespace-nowrap"
        >
          Sign In
        </Link>
      )}
    </div>
  )
}
export default LoginButton