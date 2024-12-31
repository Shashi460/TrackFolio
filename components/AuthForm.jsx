"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import dynamic from 'next/dynamic'

const Image = dynamic(() => import('next/image'), { ssr: false })
const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      // Your custom authentication logic here
      console.log('Form data:', data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-6 w-full">
      <div className="flex justify-center items-center mb-6">
        <div className="relative w-[100px] h-[100px]">
          <Image 
            src="/logo.jpg" 
            alt="logo" 
            fill
            sizes="100px"
            priority
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome back
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input 
            type="email" 
            {...register("email")}
            placeholder="Enter your email" 
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input 
            type="password" 
            {...register("password")}
            placeholder="Enter your password"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </form>
    </div>
  )
}

export default AuthForm
