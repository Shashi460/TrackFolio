import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function AuthLayout({ children }) {
  return (
    <div className={`${inter.variable} min-h-screen bg-gray-100 flex items-center justify-center p-4`}>
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  )
}
