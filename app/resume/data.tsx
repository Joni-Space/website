import React from 'react'
import { ExperienceData, Skill, Education } from './types'
import {
  Users,
  Brain,
  Zap,
  Shield,
  GitBranch,
  TrendingUp,
  Database,
  Layers,
} from 'lucide-react'

export const experiences: ExperienceData[] = [
  {
    title: 'CTO',
    company: 'The Converted',
    location: 'London, UK',
    dates: 'Jan 2025 – Present',
    type: 'founder',
    metrics: [
      { label: 'Team Size', value: '5', icon: <Users className="w-3 h-3" /> },
      { label: 'AI Models', value: '3', icon: <Brain className="w-3 h-3" /> },
      {
        label: 'Data Pipeline',
        value: 'Real-time',
        icon: <Zap className="w-3 h-3" />,
      },
    ],
    technologies: [
      'LLM Lead Gen',
      'HubSpot MCP',
      'LinkedIn Automation',
      'TypeScript',
      'Python',
    ],
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
    type: 'startup',
    metrics: [
      {
        label: 'Value Secured',
        value: '$10B+',
        icon: <Shield className="w-3 h-3" />,
      },
      {
        label: 'Transactions',
        value: '500k+',
        icon: <GitBranch className="w-3 h-3" />,
      },
      {
        label: 'Cost Reduction',
        value: '90%',
        icon: <TrendingUp className="w-3 h-3" />,
      },
      {
        label: 'Performance',
        value: '5x',
        icon: <Zap className="w-3 h-3" />,
      },
    ],
    technologies: [
      'Rust',
      'Kubernetes',
      'EVM',
      'Solidity',
      'ZK Proofs',
      'Hetzner',
      'Eigenlayer',
    ],
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
    title: 'CTO',
    company: 'Medusa',
    location: 'Remote',
    dates: 'Mar 2023 – Mar 2024',
    type: 'founder',
    metrics: [
      {
        label: 'Teams Attracted',
        value: '10+',
        icon: <Users className="w-3 h-3" />,
      },
      { label: 'Chains', value: '2', icon: <Layers className="w-3 h-3" /> },
    ],
    technologies: [
      'Solidity',
      'TypeScript',
      'Kubernetes',
      'Rust',
      'libp2p',
      'Arbitrum',
      'Filecoin',
    ],
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
    type: 'technical',
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
    type: 'technical',
    dates: 'Mar 2021 – Present',
    metrics: [
      { label: 'DAU', value: '100k+', icon: <Users className="w-3 h-3" /> },
      {
        label: 'Collections',
        value: '1000s',
        icon: <Database className="w-3 h-3" />,
      },
      {
        label: 'Gas Savings',
        value: '100x',
        icon: <Zap className="w-3 h-3" />,
      },
    ],
    technologies: [
      'TypeScript',
      'Solidity',
      'Next.js',
      'ERC721A',
      'ETL',
      'React',
    ],
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
      {
        label: 'Customers',
        value: '20k',
        icon: <Users className="w-3 h-3" />,
      },
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
    type: 'technical',
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
    type: 'startup',
    technologies: ['Rails', 'AWS', 'PostgreSQL'],
    achievements: [
      {
        category: 'technical',
        text: 'Scaled eCommerce platform with Rails/PostgreSQL',
      },
      {
        category: 'technical',
        text: 'Migrated from Heroku to AWS to cut costs by 60% and earn $500k of AWS credits',
      },
    ],
  },
]

export const skills: Skill[] = [
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

export const education: Education[] = [
  {
    degree: 'M.S. Computer Science',
    school: 'University of California, Santa Barbara',
    dates: 'Sep 2017 – Jun 2018',
    gpa: '3.90',
    focus: 'Distributed Systems, Scalable Internet Services',
    accomplishments: (
      <>
        Teaching Assistant
        <br />
        Operating Systems | Algorithms | App Development
      </>
    ),
  },
  {
    degree: 'B.S. Computer Science',
    school: 'University of California, Santa Barbara',
    dates: 'Sep 2013 – Jun 2017',
    gpa: '3.75',
    accomplishments: 'Senior Capstone Project Team Lead (1st Place)',
  },
]
