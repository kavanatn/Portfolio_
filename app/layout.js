import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kavana T N | AI/ML & Full-Stack Developer',
  description: 'Portfolio of Kavana T N, an AI/ML enthusiast and Full-Stack Developer specialized in building intelligent applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  )
}
