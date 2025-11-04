'use client'

import Image from 'next/image'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { BadgeCheck } from 'lucide-react'

interface Statistic {
  label: string
  value: string
}

const statistics: Statistic[] = [
  { label: 'Followers', value: '25K' },
  { label: 'Spotify Streams', value: '3.5M' },
  { label: 'YouTube Subscribers', value: '27K' },
  { label: 'YouTube Streams', value: '11.7M' },
]

export function ProfileHeader() {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      {/* Main header container */}
      <div className="flex items-start gap-8 mb-6">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-white/10">
            <AvatarImage src="/roya/roya-ig.jpg" alt="Roya" />
            <AvatarFallback className="text-2xl font-bold">R</AvatarFallback>
          </Avatar>
          {/* Username and verification below profile picture */}
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <a
              className="text-sm text-text-secondary hover:underline"
              href="https://instagram.com/theofficialroya"
            >
              @theofficialroya
            </a>
            <BadgeCheck
              className="w-4 h-4 fill-blue-500 text-white"
              strokeWidth={0}
            />
          </div>
        </div>

        {/* Name and Statistics */}
        <div className="flex-1 pt-2">
          {/* Name */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            ROYA
          </h1>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {statistics.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-lg md:text-xl font-semibold text-white">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-text-secondary">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
