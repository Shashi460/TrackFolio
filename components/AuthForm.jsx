"use client"
import { useState, useEffect } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { useForm } from "react-hook-form"

const AuthForm = ({ type }) => {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Don't render anything until mounted
  if (!mounted) return null

  const onSubmit = async (values) => {
    setIsLoading(true)
    
    if (type === 'signin') {
      signIn('credentials', {
        ...values,
        redirect: false
      })
      .then((callback) => {
        if (callback?.error) {
          console.error('Invalid credentials');
        }
        if (callback?.ok && !callback?.error) {
          router.push('/')
        }
      })
      .finally(() => setIsLoading(false))
    }
  }

  return (
    <div className='w-full min-h-screen p-4 flex flex-col justify-center items-center gap-8'>
      <div className='w-full max-w-md'>
        <h1 className='text-2xl font-bold text-center mb-8'>
          {type === 'signin' ? 'Sign In' : 'Sign Up'}
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your email" 
                      {...field} 
                    />
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
                    <Input 
                      type="password"
                      placeholder="Enter your password" 
                      {...field} 
                    />
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
              {isLoading ? 'Loading...' : type === 'signin' ? 'Sign In' : 'Sign Up'}
            </Button>
          </form>
        </Form>

        <p className='text-center mt-4'>
          {type === 'signin' 
            ? "Don't have an account? " 
            : "Already have an account? "
          }
          <Link 
            href={type === 'signin' ? '/signup' : '/signin'} 
            className='text-blue-600'
          >
            {type === 'signin' ? 'Sign Up' : 'Sign In'}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm
