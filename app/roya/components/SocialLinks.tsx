'use client'

import {
  FaSpotify,
  FaSoundcloud,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa'
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
    url: 'https://open.spotify.com/artist/0moHSNTsqeCsjQgITamV81?si=eLnBdOpZS7qjxCw1xIZ6ww',
    icon: <FaSpotify className="w-8 h-8" />,
    color: 'from-[#1DB954] to-[#1ed760]',
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/iamroya',
    icon: <FaSoundcloud className="w-8 h-8" />,
    color: 'from-[#ff5500] to-[#ff7700]',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@RoyaVEVO',
    icon: <FaYoutube className="w-8 h-8" />,
    color: 'from-[#FF0000] to-[#CC0000]',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/theofficialroya',
    icon: <FaInstagram className="w-8 h-8" />,
    color: 'from-[#E4405F] via-[#C13584] to-[#833AB4]',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@theofficialroya',
    icon: <FaTiktok className="w-8 h-8" />,
    color: 'from-[#00f2ea] to-[#ff0050]',
  },
]

export function SunsetOrbsSocialLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const isOddNumber = socialLinks.length % 2 !== 0

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-20 py-8 px-4 place-items-center max-w-md mx-auto">
      {socialLinks.map((link, index) => {
        const isLastItem = isOddNumber && index === socialLinks.length - 1

        return (
          <div
            key={link.name}
            className={isLastItem ? 'col-span-2 flex justify-center' : ''}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Platform-specific glow - always visible */}
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${link.color} blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500 scale-125`}
                style={{
                  animation:
                    hoveredIndex === index
                      ? 'pulse 2s ease-in-out infinite'
                      : 'none',
                }}
              />

              {/* Sunset glow accent */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sunset-orange/30 via-sunset-red/20 to-sunset-yellow/30 blur-lg transition-opacity duration-500 scale-110" />

              {/* Main orb container with platform color border */}
              <div
                className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${link.color} p-[3px] shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,107,53,0.4)]`}
              >
                <div className="w-full h-full rounded-full bg-bg-primary/90 backdrop-blur-sm flex items-center justify-center border border-white/5">
                  {/* Icon - always colored with platform gradient */}
                  <div
                    className={`text-white bg-gradient-to-r ${link.color} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110`}
                  >
                    {link.icon}
                  </div>
                </div>
              </div>

              {/* Platform name below */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-sm font-semibold text-text-secondary group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
              </div>
            </a>
          </div>
        )
      })}
    </div>
  )
}
