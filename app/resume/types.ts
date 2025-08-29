export interface ExperienceData {
  title: string
  company: string
  location: string
  dates: string
  type?: 'leadership' | 'technical' | 'startup' | 'founder'
  metrics?: {
    label: string
    value: string
    icon?: React.ReactNode
  }[]
  technologies: string[]
  achievements: {
    category: 'impact' | 'technical' | 'innovation' | 'scale' | 'leadership'
    text: string
  }[]
  highlights?: string[]
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