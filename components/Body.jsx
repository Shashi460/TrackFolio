"use client"
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

const Body = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Background blur layer */}
      {/* <div className="absolute inset-0 bg-black/90 backdrop-blur-md" /> */}
      
      {/* Content */}
      <div className="relative flex items-center justify-center min-h-screen px-4 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center gap-6 lg:gap-16 w-full max-w-6xl 
            bg-black/90 backdrop-blur-sm rounded-3xl transform transition-all duration-500 
            hover:scale-105 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] 
             p-8 lg:p-12 border border-gray-700/50"
        >
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white text-3xl lg:text-4xl font-monserrat font-bold text-center"
          >
            All in one place
          </motion.h4>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white text-7xl font-semibold line-height-4 font-monserrat text-center"
          >
            Take control your investments with <span className='bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-transparent bg-clip-text font-bold'>TrackFolio</span>
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-white text-lg lg:text-xl font-monserrat text-center"
          >
            Track, invest and analyze your portfolio in one place
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-4"
          >
            <Link 
              href="/signup" 
              className="bg-green-600 text-white px-8 py-3  text-lg font-semibold 
                hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600
                transition-all duration-300 ease-in-out transform hover:-translate-y-1 
                hover:shadow-lg inline-block rounded-3xl"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Body