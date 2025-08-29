export interface ExperienceData {
  title: string
  company: string
  companyUrl?: string
  companyLogo?: string
  location: string
  dates: string
  duration?: string
  type?: 'leadership' | 'technical' | 'startup' | 'founder'
  description?: string
  metrics?: {
    label: string
    value: string
    icon?: React.ReactNode
  }[]
  technologies: string[]
  skills?: string[]
  achievements: {
    category: 'impact' | 'technical' | 'innovation' | 'scale' | 'leadership'
    text: string
  }[]
  highlights?: string[]
  subExperience?: ExperienceData // For nested experiences like Protocol Labs under Medusa
}

export interface Skill {
  category: string
  skills: string
}

export interface Education {
  degree: string
  school: string
  dates: string
  gpa: string
  focus?: string
  accomplishments?: string | React.ReactNode
}
