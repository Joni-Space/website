'use client'

import { useState } from 'react'
import { Github, Linkedin, Mail, Minus, Plus } from 'lucide-react'

interface Experience {
  title: string
  subtitle: string
  bullets: string[]
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

const AccordionItem = ({
  title,
  subtitle,
  children,
  isOpen,
  onToggle,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}) => (
  <div className="border-b border-gray-100 last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full py-5 px-6 text-left flex justify-between items-start bg-white hover:bg-gray-50/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 rounded-lg"
    >
      <div className="flex-1">
        <h3 className="text-base font-medium text-gray-900 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>
      <span className="ml-6 flex h-6 w-6 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-200">
        {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-6 pb-5">{children}</div>
    </div>
  </div>
)

const SkillCategory = ({
  category,
  skills,
}: {
  category: string
  skills: string
}) => (
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
  const [openIndices, setOpenIndices] = useState<number[]>([])

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  const experiences: Experience[] = [
    {
      title: 'Co-Founder & CTO, The Converted',
      subtitle: 'London, UK | Jan 2025 – Present',
      bullets: [
        'Led "Humanized-AI" for enterprise lead gen: Architected AI systems scraping LinkedIn data, using MCP for CRM superpowers, enabling a lean consulting startup.',
        'Prototyped AI-driven prospect priority search to maximize conversion rate of outbound sales reps.',
        'Built ethical data pipelines, positioning for AI innovation scale.',
      ],
    },
    {
      title: 'Lead Blockchain Developer, Lagrange Labs',
      subtitle: 'London, UK | Mar 2024 – Nov 2024',
      bullets: [
        'Developed EVM contracts for ZK Coprocessor, securing $10B+ ETH, 500k+ txns, with AI-like optimizations.',
        'Architected Kubernetes/Hetzner infra: 90% cost cut, 5x performance on ZK proving.',
        'Implemented Rust distributed system for proof assignment in Eigenlayer AVS, akin to AI orchestration.',
      ],
    },
    {
      title: 'Co-Founder, Medusa',
      subtitle: 'Remote | Mar 2023 – Mar 2024',
      bullets: [
        'Developed decryption oracle network: Deployed on Arbitrum/Filecoin, attracted 10+ teams.',
        'Engineered Solidity contracts, TypeScript SDK, Kubernetes, Rust libp2p for adoption.',
        'Built protocols for AI-enhanced data privacy in blockchain.',
      ],
    },
    {
      title: 'Senior Software Engineer, Protocol Labs',
      subtitle: 'Remote | Sep 2022 – Mar 2023',
      bullets: [
        'Launched Medusa Network: Solidity, TypeScript SDK, Kubernetes, Rust for AI-compatible data mgmt.',
      ],
    },
    {
      title: 'Senior Software Engineer (Freelance)',
      subtitle: 'Remote | Mar 2021 – Present',
      bullets: [
        'DeFi Llama NFT: Built frontend/backend/ETL; TypeScript pipelines for 1000s collections, 100k+ DAU dashboards with AI stats.',
        'NFTism: Solidity ERC20/MerkleTree; Launched ERC721A for 100x gas savings; Next.js eCommerce with AI personalization.',
      ],
    },
    {
      title: 'Senior Software Engineer, AppFolio',
      subtitle: 'Santa Barbara, CA | Jun 2017 – Feb 2021 (intermittent)',
      bullets: [
        'Led team of 8 for SaaS launch to 20k customers: Rails, MySQL, React; Owned SOA components.',
        'Pioneered DevOps with AWS/Kubernetes/Terraform for zero-downtime, aligning with AI infrastructures.',
      ],
    },
    {
      title: 'Software Engineer, Amazon',
      subtitle: 'Santa Barbara, CA | Aug 2018 – Feb 2019',
      bullets: [
        'Scaled Alexa ETL pipeline for 100M users; Streamed Wikipedia data to boost F1 score with AI eval/fine-tuning.',
        'Built Python metrics service (Elasticsearch/Kibana); CMS for knowledge graph, enhancing NLP.',
      ],
    },
    {
      title: 'Software Engineer Intern, Trackr',
      subtitle: 'Santa Barbara, CA | Jan 2016 – Apr 2017',
      bullets: [
        'Scaled eCommerce site with Rails/PostgreSQL, informing AI/blockchain data work.',
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
      accomplishments:
        'Teaching Assistant: Operating Systems, Algorithms, App Development',
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
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                  {experiences.map((exp, index) => (
                    <AccordionItem
                      key={index}
                      title={exp.title}
                      subtitle={exp.subtitle}
                      isOpen={openIndices.includes(index)}
                      onToggle={() => toggleAccordion(index)}
                    >
                      <ul className="space-y-2.5 text-sm text-gray-600">
                        {exp.bullets.map((bullet, bIndex) => (
                          <li
                            key={bIndex}
                            className="relative pl-5 leading-relaxed"
                          >
                            <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </AccordionItem>
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
                  Product engineer and leader with 8+ years in distributed
                  systems, AI experimentation, and blockchain. Expert in rapid
                  domain adaptation, building scalable solutions, and driving
                  impact in fast-paced environments. Seeking to innovate in AI
                  enterprises with strong communication and technical prowess.
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
                <h2 className="text-lg font-semibold text-gray-900 mb-4 tracking-tight">
                  Skills
                </h2>
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
