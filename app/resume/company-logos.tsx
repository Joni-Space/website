import React from 'react'
import Image from 'next/image'
import { SiAmazon } from 'react-icons/si'
import { Building2, Code2 } from 'lucide-react'

// Company logo component wrapper
const CompanyLogo: React.FC<{
  src?: string
  alt: string
  fallback?: React.ReactNode
}> = ({ src, alt, fallback = <Building2 className="w-5 h-5" /> }) => {
  if (!src) return <>{fallback}</>

  return (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={20}
        height={20}
        className="object-contain"
      />
    </div>
  )
}

// Company logos and URLs mapping
export const companyInfo: {
  [key: string]: { logo?: React.ReactNode; url?: string }
} = {
  'The Converted': {
    url: 'https://theconverted.io',
    logo: (
      <CompanyLogo
        src="/resume/logos/the-converted-logo.png"
        alt="The Converted"
      />
    ),
  },
  'Lagrange Labs': {
    url: 'https://www.lagrange.dev',
    logo: (
      <CompanyLogo src="/resume/logos/lagrange-logo.svg" alt="Lagrange Labs" />
    ),
  },
  Medusa: {
    url: 'https://cryptonet.org/projects/project-medusa-scalable-threshold-network-on-chain',
    logo: <CompanyLogo src="/resume/logos/medusa-logo.png" alt="Medusa" />,
  },
  'Protocol Labs': {
    url: 'https://www.protocol.ai',
    logo: (
      <CompanyLogo
        src="/resume/logos/protocol-labs-logo.png"
        alt="Protocol Labs"
      />
    ),
  },
  AppFolio: {
    url: 'https://www.appfolio.com',
    logo: <CompanyLogo src="/resume/logos/appfolio-logo.png" alt="AppFolio" />,
  },
  Amazon: {
    url: 'https://amazon.com',
    logo: <SiAmazon className="w-5 h-5" />,
  },
  Trackr: {
    url: 'https://en.wikipedia.org/wiki/TrackR',
    logo: <CompanyLogo src="/resume/logos/trackr-logo.png" alt="Trackr" />,
  },
  'University of California': {
    url: 'https://education.ucsb.edu',
    logo: (
      <CompanyLogo
        src="/resume/logos/ucsb-logo.webp"
        alt="University of California"
      />
    ),
  },
  Freelance: {
    url: '',
    logo: <Code2 className="w-5 h-5" />,
  },
}
