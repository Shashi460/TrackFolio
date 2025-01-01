"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import dynamic from 'next/dynamic'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
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

const Image = dynamic(() => import('next/image'), { ssr: false })
const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

const AuthForm = ({type}) => {

  const handleGoogleAuth = async () => {
    try {
      await signIn("google", {
        callbackUrl: "/",
        redirect: true,
      })
    } catch (error) {
      console.error("Authentication error:", error)
    }
  }
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    }
  })
const router = useRouter() ;

const onSubmit = async (data) => {
  setIsLoading(true)
  try {
    setIsSubmitted(true)
    
    if (type === "signin") {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      })
      if (res.error) {
        console.error("Sign in failed:", res.error)
      } else {
        router.push("/")
      }
    } 
    console.log('Form data:', data)
  } catch (error) {
    console.error(error)
  } finally {
    setIsLoading(false)
  }
}


  return (
    <div className="flex  flex-col items-center space-y-6 w-full">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome back to <Link href="/" className="font-monserrat text-blue-500 text-3xl font-bold cursor-pointer">TrackFolio</Link>
        </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">

          {type === 'signup' && (
            <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          )}
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
          
        </form>
      </Form>
      <div className="flex justify-center items-center">
        <hr/>
        <p>or</p>
        <hr />
      </div>
      <Button
              onClick={handleGoogleAuth}
              className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 hover:bg-gray-50 border border-gray-300 h-14 text-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              {type === "signin" ? "Sign in with Google" : "Sign up with Google"}
            </Button>

            <div className="flex justify-center items-center gap-2">
            <p>{type === "signin" ? "Don't have an account?" : "Already have an account?"}</p>
            <Link href={type === "signin" ? "/signup" : "/signin"} className="text-blue-500 ">
              {type === "signin" ? "Sign Up" : "Sign In"}
            </Link>
          </div>
    </div>
  )
}
export default AuthForm
