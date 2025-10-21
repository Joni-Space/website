'use client'

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

export function RoyaLogo({ font = 'space-grotesk', size = 'lg' }: RoyaLogoProps) {
  const fontClass = `font-${font}`

  return (
    <div className={`${fontClass} ${sizeClasses[size]} font-bold tracking-tight flex items-center justify-center`}>
      <span className="text-black">R</span>
      <div className="relative inline-block mx-1">
        {/* Evil Eye "O" */}
        <div className="relative w-[0.8em] h-[0.8em] inline-flex items-center justify-center">
          {/* Outer eye shape */}
          <div className="absolute inset-0 bg-white rounded-full shadow-lg shadow-sunset-orange/30" />

          {/* Iris with gradient */}
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-br from-sky-400 to-blue-600" />

          {/* Pupil */}
          <div className="absolute inset-[40%] rounded-full bg-black" />

          {/* Highlight/reflection */}
          <div className="absolute top-[30%] left-[35%] w-[20%] h-[20%] rounded-full bg-white/60" />
        </div>
      </div>
      <span className="text-black">ya</span>
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
