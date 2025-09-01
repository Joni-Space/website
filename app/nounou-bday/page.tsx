'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Sparkles } from 'lucide-react'

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen h-screen bg-gradient-to-br from-pink-50 via-white to-yellow-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="relative w-full max-w-4xl mx-auto">
        <div
          className="relative preserve-3d cursor-pointer"
          style={{
            perspective: '2000px',
            transformStyle: 'preserve-3d',
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Card Container */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isOpen ? 'card-open' : ''
            }`}
            style={{
              transformStyle: 'preserve-3d',
              transform: isOpen ? 'rotateY(-10deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front Cover */}
            <div
              className={`absolute inset-0 w-full bg-gradient-to-br from-yellow-100 via-white to-pink-100 rounded-3xl shadow-2xl backface-hidden transition-all duration-1000 ${
                isOpen ? 'opacity-0 pointer-events-none' : ''
              }`}
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(0deg)',
              }}
            >
              <div className="h-[calc(100vh-2rem)] max-h-[800px] min-h-[500px] md:h-[700px] flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden">

                {/* Main content */}
                <div className="text-center z-10">
                  <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-pink-400 mb-6">
                    Happy Birthday
                  </h1>
                  <div className="flex justify-center gap-2 mb-6">
                    <Heart className="w-4 h-4 text-pink-300 fill-pink-300" />
                    <Heart className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                    <Heart className="w-4 h-4 text-pink-300 fill-pink-300" />
                  </div>
                  <h2 className="text-5xl md:text-6xl font-light text-yellow-400">
                    Nounou
                  </h2>
                  <p className="mt-12 text-xs text-gray-400 font-light tracking-wider uppercase bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    Tap to open
                  </p>
                </div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 pointer-events-none" />
              </div>
            </div>

            {/* Inside Left (Back of cover) */}
            <div
              className={`absolute inset-0 w-full bg-gradient-to-br from-pink-50 to-yellow-50 rounded-3xl shadow-2xl transition-all duration-1000 ${
                isOpen ? '' : 'opacity-0 pointer-events-none'
              }`}
              style={{
                transform: isOpen
                  ? 'rotateY(-180deg) translateX(-100%)'
                  : 'rotateY(-180deg)',
                transformOrigin: 'left center',
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="h-[calc(100vh-2rem)] max-h-[800px] min-h-[500px] md:h-[700px] flex items-center justify-center p-8 md:p-12">
                <div className="text-center">
                  <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-2xl font-light text-gray-600">
                    For a Queen
                  </p>
                </div>
              </div>
            </div>

            {/* Inside Right (Main content) */}
            <div
              className={`relative w-full bg-white rounded-3xl shadow-2xl transition-all duration-1000 ${
                isOpen ? '' : 'opacity-0 pointer-events-none scale-95'
              }`}
              style={{
                transform: isOpen
                  ? 'translateX(0)'
                  : 'translateX(0) scale(0.95)',
              }}
            >
              <div className="h-[calc(100vh-2rem)] max-h-[800px] min-h-[500px] md:h-[700px] overflow-y-auto p-6 md:p-12">
                <div className="max-w-md mx-auto">
                  {/* Image */}
                  <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 md:mb-8 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/nounou/baby.jpg"
                      alt="Nounou"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Letter content */}
                  <div className="space-y-3 md:space-y-4 text-center">
                    <p className="text-base md:text-lg font-light text-gray-700">
                      Noussia,
                    </p>

                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Happy birthday my little peony. What an unexpected gift
                      you are to me.
                    </p>

                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      22 trips around the Sun and it only took you 21.75 trips
                      to find me.
                    </p>

                    <p className="text-sm md:text-base text-gray-600 font-light italic">
                      Bravo mon amour!
                    </p>

                    <div className="py-2">
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto" />
                    </div>

                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      You are truly an impressive and wonderful human being with
                      whom I look forward to savouring my time.
                    </p>

                    <div className="py-2">
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto" />
                    </div>

                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      I hope you enjoy your special day. And then you get to
                      celebrate with me next week :)
                    </p>

                    <div className="py-2">
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto" />
                    </div>

                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Until then, know that my thoughts are wrapped around you
                      like the warmest embrace, mon amour.
                    </p>

                    <div className="pt-6">
                      <p className="text-sm md:text-base text-gray-700 font-light">
                        Love,
                      </p>
                      <p className="text-lg md:text-xl font-light text-gray-800 mt-2">
                        Jonathan
                      </p>
                    </div>

                    <div className="flex justify-center gap-2 pt-4">
                      <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
                      <Heart className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
                      <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles for ambiance */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-float opacity-60" />
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-pink-300 rounded-full animate-float-delayed opacity-60" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-300 rounded-full animate-float opacity-60" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-float-delayed opacity-60" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(20px) translateX(-10px);
          }
          66% {
            transform: translateY(-10px) translateX(10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  )
}
