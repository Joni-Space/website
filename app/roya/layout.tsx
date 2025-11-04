import './roya-theme.css'
import { Space_Grotesk, Sora, Outfit, DM_Sans } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export default function RoyaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`roya-page ${spaceGrotesk.variable} ${sora.variable} ${outfit.variable} ${dmSans.variable}`}
    >
      {children}
    </div>
  )
}
