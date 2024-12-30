'use client'
import { motion } from "framer-motion"
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Feed = () => {
  return (


    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 py-10"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      > 
        {/* First Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 w-full max-w-6xl 
            transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl    p-10  rounded-3xl
            hover:bg-gradient-to-r hover:from-white hover:to-gray-50"
        >
          <div className="w-full lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-6xl font-monserrat font-bold mb-4"
            >
              Track Your Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Monitor your investments, analyze performance, and make informed decisions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link 
                href="/signup" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold 
                  hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600
                  transition-all duration-300 ease-in-out transform hover:-translate-y-1 
                  hover:shadow-lg"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 p-8"
          >
            <Image 
              src="/stockmarketimg1.jpg" 
              alt="Stock Market" 
              className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 hover:brightness-110"
              width={500}
              height={500}
            />
          </motion.div>
        </motion.div>

        {/* Second Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 w-full max-w-6xl mt-10 p-10
            bg-black backdrop-blur-md rounded-3xl transform transition-all duration-500 hover:scale-[1.02] 
            hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:bg-gray-900"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 p-8"
          >
            <Image 
              src="/stockmarketimg2.jpg" 
              alt="Stock Market" 
              className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 hover:brightness-110"
              width={500}
              height={500}
            />
          </motion.div>

          <div className="w-full lg:w-1/2 text-white p-8">
            <motion.h1 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-6xl font-monserrat font-bold mb-4"
            >
              Zero cost portfolio tracking
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Track your portfolio with zero cost.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link 
                href="/signup" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold 
                  hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 
                  transition-all duration-300 ease-in-out transform hover:-translate-y-1 
                  hover:shadow-lg"
              >
                Open Account
              </Link>
            </motion.div>
          </div>
        </motion.div>

        
        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose TrackFolio?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Tracking",
                description: "Monitor your investments in real-time with live market data and instant updates."
              },
              {
                title: "Portfolio Analysis",
                description: "Get detailed insights into your portfolio performance with advanced analytics."
              },
              {
                title: "Smart Alerts",
                description: "Set custom alerts for price changes, market movements, and portfolio updates."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-center mb-12"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Create Account",
                description: "Sign up and set up your portfolio in minutes."
              },
              {
                step: 2,
                title: "Add Investments",
                description: "Add your investments and track them in real-time."
              },
              {
                step: 3,
                title: "Track & Analyze",
                description: "Monitor performance and make informed decisions."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Start Tracking?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8"
          >
            Join thousands of investors who trust TrackFolio for their portfolio management.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition-colors font-monserrat"
          >
            Start Tracking Now
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Feed
