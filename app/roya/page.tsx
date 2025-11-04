import { ProfileHeader } from './components/ProfileHeader'
import { SunsetOrbsSocialLinks } from './components/SocialLinks'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ROYA (@theofficialroya) - Official Site',
  description:
    'Official page for ROYA - Singer, songwriter, and artist. Listen to latest releases on Spotify, YouTube, and more.',
  icons: {
    icon: '/favicon.ico',
  },
  themeColor: '#000000',
  openGraph: {
    title: 'ROYA (@theofficialroya) - Official Site',
    description:
      'Official page for ROYA - Singer, songwriter, and artist. Listen to latest releases on Spotify, YouTube, and more.',
    siteName: 'ROYA Official',
    images: [
      {
        url: '/og/social-preview-image.png',
        width: 1200,
        height: 630,
        alt: 'ROYA - Official Site',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@theofficialroya',
    creator: '@theofficialroya',
    title: 'ROYA (@theofficialroya) - Official Site',
    description:
      'Official page for ROYA - Singer, songwriter, and artist. Listen to latest releases on Spotify, YouTube, and more.',
    images: ['/og/social-preview-image.png'],
  },
}

export default function RoyaPage() {
  return (
    <div className="min-h-screen">
      {/* Main Section - Clean and Minimal */}
      <section className="relative min-h-screen flex flex-col items-center px-4 py-12">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-2xl mx-auto">
          {/* Profile Header - Instagram Style */}
          <div className="mb-0">
            <ProfileHeader />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-8" />

          {/* Social Links - Linktree Style */}
          <div className="mb-16">
            <SunsetOrbsSocialLinks />
          </div>
        </div>
      </section>
    </div>
  )
}
