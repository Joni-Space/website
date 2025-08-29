import React from 'react'
import { SiAmazon } from 'react-icons/si'
import { Building2, University } from 'lucide-react'

// Company logos and URLs mapping
export const companyInfo: {
  [key: string]: { logo?: React.ReactNode; url?: string }
} = {
  'The Converted': {
    url: 'https://theconverted.io',
    logo: <Building2 className="w-4 h-4" />,
  },
  'Lagrange Labs': {
    url: 'https://www.lagrange.dev',
    logo: <Building2 className="w-4 h-4" />,
  },
  Medusa: {
    url: 'https://cryptonet.org/projects/project-medusa-scalable-threshold-network-on-chain',
    logo: <Building2 className="w-4 h-4" />,
  },
  'Protocol Labs': {
    url: 'https://www.protocol.ai',
    logo: <Building2 className="w-4 h-4" />,
  },
  AppFolio: {
    url: 'https://www.appfolio.com',
    logo: <Building2 className="w-4 h-4" />,
  },
  Amazon: {
    url: 'https://amazon.com',
    logo: <SiAmazon className="w-4 h-4" />,
  },
  Trackr: {
    url: 'https://en.wikipedia.org/wiki/TrackR',
    logo: <Building2 className="w-4 h-4" />,
  },
  'IT Consultant': {
    url: 'https://education.ucsb.edu',
    logo: <University className="w-4 h-4" />,
  },
}
