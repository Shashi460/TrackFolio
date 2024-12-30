import { Inter } from "next/font/google";
import "../styles/globals.css";
import { AuthProvider } from "../providers/auth-provider";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'TrackFolio',
  description: 'Track your portfolio',
}
