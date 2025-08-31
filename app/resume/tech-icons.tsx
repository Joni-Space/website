import { Brain, Cloud, Code2, Cpu, Database, Layers } from 'lucide-react'
import type React from 'react'
import { AiFillRobot } from 'react-icons/ai'
import {
  SiAmazonwebservices,
  SiAnthropic,
  SiDocker,
  SiElasticsearch,
  SiEthereum,
  SiHubspot,
  SiIpfs,
  SiKibana,
  SiKubernetes,
  SiLinkedin,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRubyonrails,
  SiRust,
  SiSolidity,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si'

const iconClass = 'w-3 h-3'

export const techIcons: { [key: string]: React.ReactNode } = {
  // Programming Languages
  TypeScript: <SiTypescript className={iconClass} />,
  Python: <SiPython className={iconClass} />,
  Rust: <SiRust className={iconClass} />,
  Solidity: <SiSolidity className={iconClass} />,

  // Frontend Frameworks
  React: <SiReact className={iconClass} />,
  'Next.js': <SiNextdotjs className={iconClass} />,

  // Backend & Databases
  Rails: <SiRubyonrails className={iconClass} />,
  PostgreSQL: <SiPostgresql className={iconClass} />,
  MySQL: <SiMysql className={iconClass} />,
  Elasticsearch: <SiElasticsearch className={iconClass} />,
  Kibana: <SiKibana className={iconClass} />,

  // Infrastructure & Cloud
  AWS: <SiAmazonwebservices className={iconClass} />,
  Kubernetes: <SiKubernetes className={iconClass} />,
  Terraform: <SiTerraform className={iconClass} />,
  Docker: <SiDocker className={iconClass} />,
  Hetzner: <Cloud className={iconClass} />,

  // Blockchain
  Ethereum: <SiEthereum className={iconClass} />,
  EVM: <SiEthereum className={iconClass} />,
  Arbitrum: <SiEthereum className={iconClass} />,
  Filecoin: <Layers className={iconClass} />,
  'ZK Proofs': <Cpu className={iconClass} />,
  Eigenlayer: <Layers className={iconClass} />,
  ERC721A: <SiEthereum className={iconClass} />,

  // AI/ML
  AI: <Brain className={iconClass} />,
  ML: <Brain className={iconClass} />,
  PyTorch: <SiPytorch className={iconClass} />,
  NLP: <Brain className={iconClass} />,
  MCP: <Brain className={iconClass} />,

  // APIs & Integrations
  'LLM Lead Gen': <Brain className={iconClass} />,
  'Claude Code': <SiAnthropic className={iconClass} />,
  'LinkedIn API': <SiLinkedin className={iconClass} />,
  'LinkedIn ETL': <SiLinkedin className={iconClass} />,
  'LinkedIn Automation': <AiFillRobot className={iconClass} />,
  'LinkedIn Browser Automation': <AiFillRobot className={iconClass} />,
  'HubSpot MCP': <SiHubspot className={iconClass} />,

  // Data & Processing
  ETL: <Database className={iconClass} />,
  'Data Pipelines': <Database className={iconClass} />,
  'Distributed Systems': <Cpu className={iconClass} />,

  // Libraries & Protocols
  libp2p: <SiIpfs className={iconClass} />,

  // Default fallback
  default: <Code2 className={iconClass} />,
}

export const getIcon = (tech: string): React.ReactNode => {
  return techIcons[tech] || techIcons.default
}
