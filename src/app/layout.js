
import { Jost } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from '@/store/providers'


const inter = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Strapi App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Providers>
        <Header />
        {children}
        <Footer />
        </Providers>
        
      </body>
    </html>
  )
}
