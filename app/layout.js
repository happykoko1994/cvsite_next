import { DM_Sans, Poppins } from 'next/font/google'
import './styles/globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

const dmSans = DM_Sans({
  weight: ['500', '600', '700'],
  subsets: ['latin']
})
const poppins = Poppins({
  weight: ['500', '600', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Портфолио',
  description: 'Портфолио Горячев М.В.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Nav />
        {children}
        <Footer />
      </body>

    </html>
  )
}
