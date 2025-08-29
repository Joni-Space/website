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
  DollarSign,
} from 'lucide-react'

export const experiences: ExperienceData[] = [
  {
    title: 'CTO',
    company: 'The Converted',
    location: 'London, UK',
    dates: 'Jan 2025 – Present',
    duration: '8 mos',
    type: 'founder',
    description:
      'The Converted is on a mission to conquer enterprise tech lead generation through our pioneering approach we call "Humanized-AI".',
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
    duration: '9 mos',
    type: 'startup',
    description:
      "Design and develop EVM smart contracts for Lagrange's ZK Coprocessor, securing $10B+ ETH and serving 500k+ transactions.",
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
      'Solidity',
      'Rust',
      'Kubernetes',
      'AWS',
      'Hetzner',
      'ZK Proofs',
      'Eigenlayer',
      'EVM',
    ],
    skills: ['Distributed Systems', 'Smart Contracts', 'Zero-Knowledge Proofs'],
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
        text: 'Achieved 90% cost reduction and ~5x performance on CPU-intensive ZK proving vs AWS',
      },
      {
        category: 'innovation',
        text: 'Implemented Rust distributed system for proof workload planning and assignment to 3rd-party provers',
      },
    ],
  },
  {
    title: 'CTO',
    company: 'Medusa',
    location: 'Remote',
    dates: 'Sep 2022 – Mar 2024',
    duration: '1 yr 6 mo',
    type: 'founder',
    description:
      'Co-created and developed the Medusa network, a decryption oracle network for managing private data via smart contracts.',
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
      'Ethereum',
    ],
    skills: [
      'Entrepreneurship',
      'Fundraising',
      'Product Development',
      'Startups',
    ],
    achievements: [
      {
        category: 'innovation',
        text: 'Co-created decryption oracle network deployed on Arbitrum/Filecoin',
      },
      {
        category: 'impact',
        text: 'Attracted 10+ teams to adopt the platform',
      },
      {
        category: 'technical',
        text: 'Engineered fullstack: Solidity contracts, TypeScript SDK, Rust libp2p networking',
      },
      {
        category: 'innovation',
        text: 'Built protocols for AI-enhanced data privacy in blockchain',
      },
    ],
    // Nested experience showing Protocol Labs role that led to Medusa spinout
    subExperience: {
      title: 'Senior Software Engineer',
      company: 'Protocol Labs',
      location: 'Remote',
      dates: 'Sep 2022 – Mar 2023',
      duration: '6 mos',
      type: 'technical',
      description:
        'Developed Solidity smart contracts, TypeScript SDK, Kubernetes infrastructure, and Rust libp2p networking code to launch Medusa Network on Arbitrum and Filecoin.',
      technologies: [
        'Solidity',
        'TypeScript',
        'Kubernetes',
        'Rust',
        'libp2p',
        'AWS',
        'Arbitrum',
        'Filecoin',
        'Ethereum',
      ],
      skills: ['Smart Contracts', 'Distributed Systems'],
      achievements: [
        {
          category: 'technical',
          text: 'Built foundation for Medusa Network with full SDK and infrastructure',
        },
        {
          category: 'innovation',
          text: 'Designed AI-compatible data management systems that evolved into Medusa',
        },
      ],
    },
  },
  {
    title: 'Blockchain Developer',
    company: 'Freelance',
    location: 'Remote',
    dates: 'Mar 2021 – Present',
    type: 'technical',
    description: 'Fullstack Dapp Development and ETL for Ethereum Ecosystem',
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
    dates: 'Jun 2017 – Mar 2021',
    duration: '2 yrs 2 mos (intermittent)',
    type: 'leadership',
    description:
      'Led product team to unlock new customer base and revenue streams. Developed distributed infrastructure to improve user experience (real-time analytics, events, authentication).',
    metrics: [
      { label: 'Team Size', value: '8', icon: <Users className="w-3 h-3" /> },
      {
        label: 'Customers',
        value: '20k',
        icon: <Users className="w-3 h-3" />,
      },
    ],
    technologies: [
      'Rails',
      'MySQL',
      'React',
      'AWS',
      'Kubernetes',
      'Terraform',
      'OAuth 2.0',
      'JWT',
    ],
    skills: ['Leadership', 'Microservices', 'Cloud Architecture'],
    achievements: [
      {
        category: 'leadership',
        text: 'Led team of 8 engineers for new SaaS product launch',
      },
      {
        category: 'scale',
        text: 'Scaled platform to serve 20k+ customers with new revenue streams',
      },
      {
        category: 'technical',
        text: 'Architected authentication service based on OAuth 2.0 and JSON Web Tokens',
      },
      {
        category: 'innovation',
        text: 'Led push to cloud and microservices via core authentication system',
      },
    ],
  },
  {
    title: 'Software Development Engineer',
    company: 'Amazon',
    location: 'Santa Barbara, CA',
    type: 'technical',
    dates: 'Aug 2018 – Feb 2019',
    duration: '7 mos',
    description:
      'Data Engineering to support Question-Answering for Amazon Alexa.',
    metrics: [
      { label: 'Users', value: '100M', icon: <Users className="w-3 h-3" /> },
    ],
    technologies: ['Python', 'Elasticsearch', 'Kibana', 'ETL', 'NLP', 'ML'],
    achievements: [
      {
        category: 'scale',
        text: 'Scaled Alexa ETL pipeline for 100M+ users',
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
    duration: '1 yr 4 mos',
    type: 'startup',
    description:
      'Migrated backend from Heroku to AWS, enabling scalability, cutting server costs in half, and earning $100,000 of AWS credit.',
    metrics: [
      {
        label: 'Cost Reduction',
        value: '50%',
        icon: <TrendingUp className="w-3 h-3" />,
      },
      {
        label: 'AWS Credits',
        value: '$100k',
        icon: <DollarSign className="w-3 h-3" />,
      },
    ],
    technologies: ['Rails', 'AWS', 'PostgreSQL', 'React', 'Redux', 'ES6'],
    achievements: [
      {
        category: 'impact',
        text: 'Migrated from Heroku to AWS, cutting costs by 50% and earning $100k AWS credits',
      },
      {
        category: 'technical',
        text: 'Built eCommerce flow connecting Braintree, Google Maps, Shipstation, Zendesk',
      },
      {
        category: 'innovation',
        text: 'Revamped checkout with shopping cart SPA using React, Redux, ES6',
      },
    ],
  },
  {
    title: 'IT Consultant',
    company: 'IT Consultant',
    location: 'UC Santa Barbara',
    dates: 'Nov 2014 – Jan 2016',
    duration: '1 yr 3 mos',
    type: 'technical',
    description:
      'Discovered, diagnosed, and solved network issues with team of 4 professionals and 7 students at the Gevirtz Graduate School of Education.',
    technologies: ['Network Administration', 'Hardware Support', 'CLI Tools'],
    achievements: [
      {
        category: 'leadership',
        text: 'Managed team of 4 professionals and 7 students for IT support',
      },
      {
        category: 'technical',
        text: 'Interfaced with network equipment through CLI to debug and deploy software',
      },
      {
        category: 'impact',
        text: 'Maintained IT infrastructure for entire graduate school faculty and staff',
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
