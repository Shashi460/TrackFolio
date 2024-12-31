import './globals.css'

export const metadata = {
  title: 'TrackFolio',
  description: 'Track your portfolio with zero cost',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
