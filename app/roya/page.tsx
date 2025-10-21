import { RoyaLogo, RoyaLogoShowcase } from './components/RoyaLogo'
import { SunsetOrbsSocialLinks } from './components/SocialLinks'

export default function RoyaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile First (Above the fold) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
        {/* Background gradient glow */}
        <div className="absolute inset-0 bg-gradient-radial from-sunset-orange/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sunset-red/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sunset-yellow/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-md mx-auto text-center">
          {/* Main Logo */}
          <div className="mb-12">
            <RoyaLogo font="space-grotesk" size="xl" />
          </div>

          {/* Social Links - Linktree Style */}
          <div className="mb-16">
            <SunsetOrbsSocialLinks />
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative w-full aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-sunset-orange via-sunset-red to-sunset-yellow opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
              <div className="text-center">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-sm">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* Font Showcase Section - For choosing the logo font */}
      <section className="border-t border-white/10">
        <RoyaLogoShowcase />
      </section>

      {/* Future Sections Placeholder */}
      <section className="min-h-screen flex items-center justify-center border-t border-white/10">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Latest Releases</h2>
          <p className="text-text-secondary">Coming soon...</p>
        </div>
      </section>
    </div>
  )
}
