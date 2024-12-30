import { Inter, IBM_Plex_Serif,Montserrat } from "next/font/google";
import "../../styles/globals.css";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
