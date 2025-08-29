'use client'

import { useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Users,
  Cpu,
  TrendingUp,
  Database,
  Cloud,
  Code2,
  Layers,
  Zap,
  Shield,
  Brain,
  Rocket,
  GitBranch,
} from 'lucide-react'

interface ExperienceData {
  title: string
  company: string
  location: string
  dates: string
  type?: 'leadership' | 'technical' | 'startup'
  metrics?: {
    label: string
    value: string
    icon?: React.ReactNode
  }[]
  technologies: string[]
  achievements: {
    category: 'impact' | 'technical' | 'innovation' | 'scale'
    text: string
  }[]
  highlights?: string[]
}

interface Skill {
  category: string
  skills: string
}

interface Education {
  degree: string
  school: string
  dates: string
  gpa: string
  focus?: string
  accomplishments?: string
}

const techIcons: { [key: string]: React.ReactNode } = {
  React: <Code2 className="w-3 h-3" />,
  TypeScript: <Code2 className="w-3 h-3" />,
  Rust: <Shield className="w-3 h-3" />,
  Solidity: <Layers className="w-3 h-3" />,
  Python: <Code2 className="w-3 h-3" />,
  AWS: <Cloud className="w-3 h-3" />,
  Kubernetes: <Cpu className="w-3 h-3" />,
  AI: <Brain className="w-3 h-3" />,
  Blockchain: <Layers className="w-3 h-3" />,
  ETL: <Database className="w-3 h-3" />,
}

const categoryColors = {
  impact: 'from-blue-500/10 to-blue-600/5 border-blue-200',
  technical: 'from-purple-500/10 to-purple-600/5 border-purple-200',
  innovation: 'from-amber-500/10 to-amber-600/5 border-amber-200',
  scale: 'from-emerald-500/10 to-emerald-600/5 border-emerald-200',
}

const categoryIcons = {
  impact: <TrendingUp className="w-3 h-3" />,
  technical: <Cpu className="w-3 h-3" />,
  innovation: <Rocket className="w-3 h-3" />,
  scale: <Users className="w-3 h-3" />,
}

const ExperienceCard = ({
  experience,
  isOpen,
  onToggle,
}: {
  experience: ExperienceData
  isOpen: boolean
  onToggle: () => void
}) => {
  const springProps = useSpring({
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    config: { tension: 300, friction: 20 },
  })

  const contentSpring = useSpring({
    opacity: isOpen ? 1 : 0,
    height: isOpen ? 'auto' : 0,
    config: { tension: 280, friction: 60 },
  })

  return (
    <div className="group relative border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 transition-all duration-300 bg-white hover:shadow-lg">
      <button
        onClick={onToggle}
        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 rounded-xl"
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-base font-semibold text-gray-900">{experience.title}</h3>
              {experience.type === 'leadership' && (
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                  Leadership
                </span>
              )}
              {experience.type === 'startup' && (
                <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">
                  Founder
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-1">{experience.company}</p>
            <p className="text-xs text-gray-500">
              {experience.location} • {experience.dates}
            </p>

            {/* Collapsed View: Tech Stack Pills */}
            {!isOpen && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {experience.technologies.slice(0, 6).map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-100"
                  >
                    {techIcons[tech] || <Code2 className="w-3 h-3" />}
                    <span>{tech}</span>
                  </span>
                ))}
                {experience.technologies.length > 6 && (
                  <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md">
                    +{experience.technologies.length - 6}
                  </span>
                )}
              </div>
            )}

            {/* Collapsed View: Key Metrics */}
            {!isOpen && experience.metrics && (
              <div className="mt-3 flex flex-wrap gap-4">
                {experience.metrics.slice(0, 3).map((metric, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <span className="text-gray-400">{metric.icon}</span>
                    <span className="text-xs font-medium text-gray-900">{metric.value}</span>
                    <span className="text-xs text-gray-500">{metric.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <animated.div
            style={springProps}
            className="ml-4 p-1.5 rounded-full bg-gray-50 text-gray-400 group-hover:bg-gray-100 transition-colors"
          >
            <ChevronDown className="w-4 h-4" />
          </animated.div>
        </div>
      </button>

      {/* Expanded View */}
      <animated.div style={contentSpring} className="overflow-hidden">
        {isOpen && (
          <div className="px-6 pb-6 space-y-4">
            {/* Metrics Dashboard */}
            {experience.metrics && experience.metrics.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {experience.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-lg border border-gray-100"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-400">{metric.icon}</span>
                      <span className="text-lg font-semibold text-gray-900">
                        {metric.value}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{metric.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Achievements by Category */}
            <div className="space-y-2">
              {['impact', 'technical', 'innovation', 'scale'].map((category) => {
                const items = experience.achievements.filter((a) => a.category === category)
                if (items.length === 0) return null
                return (
                  <div
                    key={category}
                    className={`bg-gradient-to-r ${
                      categoryColors[category as keyof typeof categoryColors]
                    } p-3 rounded-lg border`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-600">
                        {categoryIcons[category as keyof typeof categoryIcons]}
                      </span>
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        {category}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {items.map((achievement, index) => (
                        <li key={index} className="text-sm text-gray-700 leading-relaxed">
                          {achievement.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            {/* Full Tech Stack */}
            <div>
              <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white text-gray-700 text-xs rounded-md border border-gray-200 hover:border-gray-300 transition-colors"
                  >
                    {techIcons[tech] || <Code2 className="w-3 h-3" />}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </animated.div>
    </div>
  )
}

const SkillCategory = ({ category, skills }: { category: string; skills: string }) => (
  <div className="mb-4">
    <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
      {category}
    </h4>
    <div className="flex flex-wrap gap-1.5">
      {skills.split(', ').map((skill, index) => (
        <span
          key={index}
          className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md hover:bg-gray-200 transition-colors duration-200"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
)

const EducationCard = ({
  degree,
  school,
  dates,
  gpa,
  focus,
  accomplishments,
}: Education) => (
  <div className="mb-4">
    <h3 className="text-sm font-semibold text-gray-900">{degree}</h3>
    <p className="text-sm text-gray-600">{school}</p>
    <p className="text-xs text-gray-500 mt-1">
      {dates} • GPA {gpa}
    </p>
    {focus && (
      <p className="mt-2 text-xs text-gray-600">
        <span className="font-medium">Focus:</span> {focus}
      </p>
    )}
    {accomplishments && (
      <p className="mt-1 text-xs text-gray-600">
        <span className="font-medium">Accomplishments:</span> {accomplishments}
      </p>
    )}
  </div>
)

export default function ResumePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const experiences: ExperienceData[] = [
    {
      title: 'Co-Founder & CTO',
      company: 'The Converted',
      location: 'London, UK',
      dates: 'Jan 2025 – Present',
      type: 'startup',
      metrics: [
        { label: 'Team Size', value: '5', icon: <Users className="w-3 h-3" /> },
        { label: 'AI Models', value: '3', icon: <Brain className="w-3 h-3" /> },
        { label: 'Data Pipeline', value: 'Real-time', icon: <Zap className="w-3 h-3" /> },
      ],
      technologies: ['AI', 'MCP', 'TypeScript', 'Python', 'LinkedIn API', 'CRM Integration'],
      achievements: [
        {
          category: 'innovation',
          text: 'Architected "Humanized-AI" system for enterprise lead generation',
        },
        {
          category: 'technical',
          text: 'Built MCP-powered CRM superpowers enabling lean consulting operations',
        },
        {
          category: 'impact',
          text: 'Maximized conversion rates through AI-driven prospect priority search',
        },
        {
          category: 'scale',
          text: 'Designed ethical data pipelines positioned for rapid AI innovation scale',
        },
      ],
    },
    {
      title: 'Lead Blockchain Developer',
      company: 'Lagrange Labs',
      location: 'London, UK',
      dates: 'Mar 2024 – Nov 2024',
      type: 'technical',
      metrics: [
        { label: 'Value Secured', value: '$10B+', icon: <Shield className="w-3 h-3" /> },
        { label: 'Transactions', value: '500k+', icon: <GitBranch className="w-3 h-3" /> },
        { label: 'Cost Reduction', value: '90%', icon: <TrendingUp className="w-3 h-3" /> },
        { label: 'Performance', value: '5x', icon: <Zap className="w-3 h-3" /> },
      ],
      technologies: ['Solidity', 'Rust', 'Kubernetes', 'Hetzner', 'ZK Proofs', 'Eigenlayer', 'EVM'],
      achievements: [
        {
          category: 'scale',
          text: 'Secured $10B+ ETH with 500k+ transactions processed',
        },
        {
          category: 'technical',
          text: 'Developed EVM contracts for ZK Coprocessor with AI-like optimizations',
        },
        {
          category: 'impact',
          text: 'Achieved 90% cost reduction and 5x performance on ZK proving infrastructure',
        },
        {
          category: 'innovation',
          text: 'Implemented Rust distributed system for Eigenlayer AVS proof assignment',
        },
      ],
    },
    {
      title: 'Co-Founder',
      company: 'Medusa',
      location: 'Remote',
      dates: 'Mar 2023 – Mar 2024',
      type: 'startup',
      metrics: [
        { label: 'Teams Attracted', value: '10+', icon: <Users className="w-3 h-3" /> },
        { label: 'Chains', value: '2', icon: <Layers className="w-3 h-3" /> },
      ],
      technologies: ['Solidity', 'TypeScript', 'Kubernetes', 'Rust', 'libp2p', 'Arbitrum', 'Filecoin'],
      achievements: [
        {
          category: 'innovation',
          text: 'Developed decryption oracle network deployed on Arbitrum/Filecoin',
        },
        {
          category: 'impact',
          text: 'Attracted 10+ teams to the platform',
        },
        {
          category: 'technical',
          text: 'Engineered full stack: Solidity contracts, TypeScript SDK, Rust libp2p',
        },
        {
          category: 'innovation',
          text: 'Built protocols for AI-enhanced data privacy in blockchain',
        },
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Protocol Labs',
      location: 'Remote',
      dates: 'Sep 2022 – Mar 2023',
      technologies: ['Solidity', 'TypeScript', 'Kubernetes', 'Rust'],
      achievements: [
        {
          category: 'technical',
          text: 'Launched Medusa Network with full SDK and infrastructure',
        },
        {
          category: 'innovation',
          text: 'Designed AI-compatible data management systems',
        },
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Freelance',
      location: 'Remote',
      dates: 'Mar 2021 – Present',
      metrics: [
        { label: 'DAU', value: '100k+', icon: <Users className="w-3 h-3" /> },
        { label: 'Collections', value: '1000s', icon: <Database className="w-3 h-3" /> },
        { label: 'Gas Savings', value: '100x', icon: <Zap className="w-3 h-3" /> },
      ],
      technologies: ['TypeScript', 'Solidity', 'Next.js', 'ERC721A', 'ETL', 'React'],
      achievements: [
        {
          category: 'scale',
          text: 'DeFi Llama NFT: Built dashboards serving 100k+ DAU',
        },
        {
          category: 'technical',
          text: 'Implemented TypeScript ETL pipelines for 1000s of NFT collections',
        },
        {
          category: 'innovation',
          text: 'NFTism: Launched ERC721A achieving 100x gas savings',
        },
        {
          category: 'impact',
          text: 'Built Next.js eCommerce with AI personalization features',
        },
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'AppFolio',
      location: 'Santa Barbara, CA',
      dates: 'Jun 2017 – Feb 2021',
      type: 'leadership',
      metrics: [
        { label: 'Team Size', value: '8', icon: <Users className="w-3 h-3" /> },
        { label: 'Customers', value: '20k', icon: <Users className="w-3 h-3" /> },
      ],
      technologies: ['Rails', 'MySQL', 'React', 'AWS', 'Kubernetes', 'Terraform'],
      achievements: [
        {
          category: 'leadership',
          text: 'Led team of 8 engineers for SaaS product launch',
        },
        {
          category: 'scale',
          text: 'Scaled platform to serve 20k customers',
        },
        {
          category: 'technical',
          text: 'Owned critical SOA components and service architecture',
        },
        {
          category: 'innovation',
          text: 'Pioneered zero-downtime DevOps with AWS/Kubernetes/Terraform',
        },
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Amazon',
      location: 'Santa Barbara, CA',
      dates: 'Aug 2018 – Feb 2019',
      metrics: [
        { label: 'Users', value: '100M', icon: <Users className="w-3 h-3" /> },
      ],
      technologies: ['Python', 'Elasticsearch', 'Kibana', 'ETL', 'NLP', 'ML'],
      achievements: [
        {
          category: 'scale',
          text: 'Scaled Alexa ETL pipeline for 100M users',
        },
        {
          category: 'technical',
          text: 'Streamed Wikipedia data to boost F1 score with AI fine-tuning',
        },
        {
          category: 'innovation',
          text: 'Built metrics service and CMS for knowledge graph enhancing NLP',
        },
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Trackr',
      location: 'Santa Barbara, CA',
      dates: 'Jan 2016 – Apr 2017',
      technologies: ['Rails', 'PostgreSQL'],
      achievements: [
        {
          category: 'technical',
          text: 'Scaled eCommerce platform with Rails/PostgreSQL',
        },
      ],
    },
  ]

  const skills: Skill[] = [
    {
      category: 'Core Technologies',
      skills: 'Rust, Solidity, TypeScript, Python',
    },
    {
      category: 'Infrastructure & Systems',
      skills: 'AWS, Kubernetes, Terraform, Distributed Systems, Data Pipelines',
    },
    {
      category: 'AI & ML Fundamentals',
      skills:
        'Machine Learning Frameworks (PyTorch), Model Evaluation, Fine-Tuning, Data Scraping & Orchestration (MCP), ETL for Intelligent Automation',
    },
    {
      category: 'Soft Skills',
      skills: 'Leadership, Mentorship, Communication, Rapid Domain Adaptation',
    },
  ]

  const education: Education[] = [
    {
      degree: 'M.S. Computer Science',
      school: 'University of California, Santa Barbara',
      dates: 'Sep 2017 – Jun 2018',
      gpa: '3.90',
      focus: 'Distributed Systems, Cloud Data Management',
      accomplishments: 'Teaching Assistant: Operating Systems, Algorithms, App Development',
    },
    {
      degree: 'B.S. Computer Science',
      school: 'University of California, Santa Barbara',
      dates: 'Sep 2013 – Jun 2017',
      gpa: '3.75',
      accomplishments: 'Senior Capstone Project Team Lead (1st Place)',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-b from-white to-gray-50/50 px-8 py-12 text-center border-b border-gray-100">
            <h1 className="text-4xl font-light text-gray-900 tracking-tight">
              Jonathan Easterman
            </h1>
            <div className="mt-6 flex justify-center items-center space-x-6 text-sm">
              <a
                href="mailto:jonathaneasterman@gmail.com"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>jonathaneasterman@gmail.com</span>
              </a>
              <a
                href="https://github.com/jaeaster"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Github className="w-4 h-4 mr-2" />
                <span>github.com/jaeaster</span>
              </a>
              <a
                href="https://linkedin.com/in/jonathan-easterman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                <span>linkedin.com/in/jonathan-easterman</span>
              </a>
            </div>
          </div>

          {/* Main Content - Reorganized Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {/* Left Column: Experience */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6 tracking-tight">
                  Experience
                </h2>
                <div className="space-y-3">
                  {experiences.map((exp, index) => (
                    <ExperienceCard
                      key={index}
                      experience={exp}
                      isOpen={openIndex === index}
                      onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Professional Summary, Education, Skills */}
            <div className="lg:col-span-1 space-y-8">
              {/* Professional Summary */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">
                  Professional Summary
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Product engineer and leader with 8+ years in distributed systems, AI
                  experimentation, and blockchain. Expert in rapid domain adaptation, building
                  scalable solutions, and driving impact in fast-paced environments. Seeking to
                  innovate in AI enterprises with strong communication and technical prowess.
                </p>
              </div>

              {/* Education */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 tracking-tight">
                  Education
                </h2>
                {education.map((edu, index) => (
                  <EducationCard key={index} {...edu} />
                ))}
              </div>

              {/* Skills */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 tracking-tight">Skills</h2>
                {skills.map((skill, index) => (
                  <SkillCategory key={index} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}