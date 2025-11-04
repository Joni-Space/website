'use client'

import { Eye } from 'lucide-react'

type FontOption = 'space-grotesk' | 'sora' | 'outfit' | 'dm-sans'

interface RoyaLogoProps {
  font?: FontOption
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  sm: 'text-4xl',
  md: 'text-6xl',
  lg: 'text-8xl',
  xl: 'text-9xl',
}

const fontFamilies = {
  'space-grotesk': 'var(--font-space-grotesk)',
  sora: 'var(--font-sora)',
  outfit: 'var(--font-outfit)',
  'dm-sans': 'var(--font-dm-sans)',
}

export function RoyaLogo({
  font = 'space-grotesk',
  size = 'lg',
}: RoyaLogoProps) {
  return (
    <div
      className={`${sizeClasses[size]} font-bold tracking-wide flex items-center justify-center relative`}
      style={{
        fontFamily: fontFamilies[font],
        color: '#D4AF37', // Gold color
        textShadow: `
          0 2px 4px rgba(0,0,0,0.5),
          0 4px 8px rgba(0,0,0,0.3),
          0 -1px 1px rgba(255,255,255,0.3),
          0 1px 2px rgba(212,175,55,0.5)
        `,
        WebkitTextStroke: '1px rgba(255,255,255,0.1)',
      }}
    >
      <span
        style={{
          background:
            'linear-gradient(180deg, #F4E4C1 0%, #D4AF37 50%, #B8941F 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
        }}
      >
        R
      </span>
      <div className="relative inline-block mx-1">
        {/* "o" with eye icon inside */}
        <span
          className="relative"
          style={{
            background:
              'linear-gradient(180deg, #F4E4C1 0%, #D4AF37 50%, #B8941F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
          }}
        >
          o
          <div className="absolute inset-0 flex items-center justify-center">
            <Eye
              className="w-[0.35em] h-[0.35em]"
              strokeWidth={2.5}
              style={{
                stroke: 'url(#goldGradient)',
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
              }}
            />
            <svg width="0" height="0" style={{ position: 'absolute' }}>
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F4E4C1" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#B8941F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </span>
      </div>
      <span
        style={{
          background:
            'linear-gradient(180deg, #F4E4C1 0%, #D4AF37 50%, #B8941F 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
        }}
      >
        ya
      </span>
    </div>
  )
}

export function RoyaLogoShowcase() {
  const fonts: { name: string; value: FontOption; description: string }[] = [
    {
      name: 'Space Grotesk',
      value: 'space-grotesk',
      description: 'Geometric, modern, distinctive but clean',
    },
    {
      name: 'Sora',
      value: 'sora',
      description: 'Rounded, friendly, warm soul vibe',
    },
    {
      name: 'Outfit',
      value: 'outfit',
      description: 'Bold, geometric, very readable',
    },
    {
      name: 'DM Sans',
      value: 'dm-sans',
      description: 'Clean, versatile, sophisticated',
    },
  ]

  return (
    <div className="w-full py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8 text-text-secondary">
        Choose Your Logo Font
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {fonts.map((font) => (
          <div
            key={font.value}
            className="bg-bg-surface rounded-2xl p-8 border border-white/5 hover:border-sunset-orange/30 transition-all duration-300"
          >
            <div className="mb-4">
              <RoyaLogo font={font.value} size="md" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{font.name}</h3>
              <p className="text-text-secondary text-sm">{font.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
