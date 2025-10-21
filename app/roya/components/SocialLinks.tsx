'use client'

import { FaSpotify, FaSoundcloud, FaInstagram, FaTiktok } from 'react-icons/fa'
import { useState } from 'react'

interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
  color: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'Spotify',
    url: '#',
    icon: <FaSpotify className="w-8 h-8" />,
    color: 'from-[#1DB954] to-[#1ed760]',
  },
  {
    name: 'SoundCloud',
    url: '#',
    icon: <FaSoundcloud className="w-8 h-8" />,
    color: 'from-[#ff5500] to-[#ff7700]',
  },
  {
    name: 'Instagram',
    url: '#',
    icon: <FaInstagram className="w-8 h-8" />,
    color: 'from-[#E4405F] via-[#C13584] to-[#833AB4]',
  },
  {
    name: 'TikTok',
    url: '#',
    icon: <FaTiktok className="w-8 h-8" />,
    color: 'from-[#00f2ea] to-[#ff0050]',
  },
]

export function SunsetOrbsSocialLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col items-center gap-6 py-8 px-4">
      {socialLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group relative"
        >
          {/* Glow effect - outer ring */}
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${link.color} blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500 scale-150`}
            style={{
              animation: hoveredIndex === index ? 'pulse 2s ease-in-out infinite' : 'none',
            }}
          />

          {/* Sunset glow - always visible but subtle */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-sunset-orange via-sunset-red to-sunset-yellow blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-125"
          />

          {/* Main orb container */}
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-bg-surface to-bg-primary border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xl">
            {/* Icon with gradient on hover */}
            <div className={`text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:${link.color} group-hover:bg-clip-text group-hover:text-transparent`}>
              {link.icon}
            </div>
          </div>

          {/* Platform name below */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-sm font-medium text-text-secondary group-hover:text-white transition-colors duration-300">
              {link.name}
            </span>
          </div>
        </a>
      ))}
    </div>
  )
}
