import './globals.css'
import { Montserrat } from 'next/font/google'
import SessionWrapper from "@/components/SessionWrapper"
const montserrat = Montserrat({ subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
 })
export const metadata = {
  title: 'TrackFolio',
  description: 'Track your portfolio with zero cost',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  )
}
