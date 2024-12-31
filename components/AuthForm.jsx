"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import dynamic from 'next/dynamic'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const Image = dynamic(() => import('next/image'), { ssr: false })
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

const AuthForm = ({type}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
const router = useRouter() ;
  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      setIsSubmitted(true)
      // Your custom authentication logic here
      console.log('Form data:', data)
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API call
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
    router.push("/")
  }

  return (
    <div className="flex  flex-col items-center space-y-6 w-full">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome back to <span className="font-monserrat text-blue-500 text-3xl font-bold cursor-pointer" onClick={() => router.push("/")}>TrackFolio</span>
        </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your password" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {type === "signin" ? "Sign In" : "Sign Up"}
          </Button>
          <div className="flex justify-center items-center gap-2">
            <p>{type === "signin" ? "Don't have an account?" : "Already have an account?"}</p>
            <Link href={type === "signin" ? "/signup" : "/signin"} className="text-blue-500 ">
              {type === "signin" ? "Sign Up" : "Sign In"}
            </Link>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default AuthForm
