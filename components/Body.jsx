"use client"
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Body = () => {
  const session = useSession() ;
  return (
    <div className="min-h-screen w-full relative">
      <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-8
            w-full max-w-[90%] sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl
            bg-black/90 backdrop-blur-sm rounded-3xl 
            transform transition-all duration-500 
            hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] 
            p-6 sm:p-8 lg:p-12 border border-gray-700/50"
        >
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white text-xl sm:text-2xl lg:text-4xl font-montserrat font-bold text-center"
          >
            All in one place
          </motion.h4>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white text-3xl sm:text-5xl lg:text-7xl font-semibold leading-tight sm:leading-snug lg:leading-normal font-montserrat text-center"
          >
            Take control your investments with{' '}
            <span className='bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-transparent bg-clip-text font-bold'>
              TrackFolio
            </span>
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-white text-base sm:text-lg lg:text-xl font-montserrat text-center max-w-2xl"
          >
            Track, invest and analyze your portfolio in one place
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-4 sm:mt-6 lg:mt-8"
          >
            {
              session.status === "unauthenticated" && (
                <Link href="/signup">
                  <button className="bg-green-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg inline-block rounded-3xl">
                    Get Started
                  </button>
                </Link>
              ) 
            }
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Body