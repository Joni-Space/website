import { ProfileHeader } from './components/ProfileHeader'
import { SunsetOrbsSocialLinks } from './components/SocialLinks'

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
