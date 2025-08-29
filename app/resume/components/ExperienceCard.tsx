'use client'

import React, { useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import {
  ChevronDown,
  Users,
  TrendingUp,
  Cpu,
  Rocket,
  ExternalLink,
  Calendar,
  MapPin,
} from 'lucide-react'
import { ExperienceData } from '../types'
import { getIcon } from '../tech-icons'
import { companyInfo } from '../company-logos'

const categoryColors = {
  impact: 'from-blue-500/10 to-blue-600/5 border-blue-200',
  technical: 'from-purple-500/10 to-purple-600/5 border-purple-200',
  innovation: 'from-amber-500/10 to-amber-600/5 border-amber-200',
  scale: 'from-emerald-500/10 to-emerald-600/5 border-emerald-200',
  leadership: 'from-rose-500/10 to-rose-600/5 border-rose-200',
}

const categoryIcons = {
  impact: <TrendingUp className="w-3 h-3" />,
  technical: <Cpu className="w-3 h-3" />,
  innovation: <Rocket className="w-3 h-3" />,
  scale: <Users className="w-3 h-3" />,
  leadership: <Users className="w-3 h-3" />,
}

interface ExperienceCardProps {
  experience: ExperienceData
  isOpen: boolean
  onToggle: () => void
  isNested?: boolean
}

const SubExperienceCard: React.FC<{ experience: ExperienceData }> = ({
  experience,
}) => {
  const info = companyInfo[experience.company] || {}

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {info.logo}
            <h4 className="text-sm font-semibold text-gray-800">
              {experience.title}
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
            >
              {experience.company}
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-gray-400">•</span>
            <span className="text-xs text-gray-500">{experience.dates}</span>
          </div>
        </div>
      </div>

      {experience.description && (
        <p className="text-xs text-gray-600 mb-3 leading-relaxed">
          {experience.description}
        </p>
      )}

      <div className="flex flex-wrap gap-1">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-2 py-0.5 bg-white text-gray-600 text-xs rounded border border-gray-200"
          >
            {getIcon(tech)}
            <span>{tech}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isOpen,
  onToggle,
  isNested = false,
}) => {
  const [showSubExperience, setShowSubExperience] = useState(false)
  const info = companyInfo[experience.company] || {}

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
    <div
      className={`group relative border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 transition-all duration-300 bg-white ${!isNested ? 'hover:shadow-lg' : ''}`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 focus:outline-none rounded-xl"
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              {info.logo && <span className="text-gray-600">{info.logo}</span>}
              <h3 className="text-base font-semibold text-gray-900">
                {experience.title}
              </h3>
              {experience.type === 'leadership' && (
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                  Leadership
                </span>
              )}
              {experience.type === 'founder' && (
                <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">
                  Founder
                </span>
              )}
              {experience.type === 'startup' && (
                <span className="px-2 py-0.5 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                  Startup
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 text-sm">
              <a
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                {experience.company}
                {info.url && <ExternalLink className="w-3 h-3" />}
              </a>
              {experience.subExperience && (
                <>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-500 text-xs">
                    Spun out from Protocol Labs
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              <span>{experience.dates}</span>
              {experience.duration && (
                <>
                  <span className="text-gray-400">•</span>
                  <span>{experience.duration}</span>
                </>
              )}
              <span className="text-gray-400">•</span>
              <MapPin className="w-3 h-3" />
              <span>{experience.location}</span>
            </div>

            {/* Collapsed View: Description */}
            {!isOpen && experience.description && (
              <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                {experience.description}
              </p>
            )}

            {/* Collapsed View: Tech Stack Pills */}
            {!isOpen && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {experience.technologies.slice(0, 6).map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-100"
                  >
                    {getIcon(tech)}
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
                    <span className="text-xs font-medium text-gray-900">
                      {metric.value}
                    </span>
                    <span className="text-xs text-gray-500">
                      {metric.label}
                    </span>
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
            {/* Full Description */}
            {experience.description && (
              <p className="text-sm text-gray-600 leading-relaxed">
                {experience.description}
              </p>
            )}

            {/* Sub-Experience (Protocol Labs under Medusa) */}
            {experience.subExperience && (
              <SubExperienceCard experience={experience.subExperience} />
            )}

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
                    <span className="text-xs text-gray-500">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Achievements by Category */}
            <div className="space-y-2">
              {['impact', 'technical', 'innovation', 'scale', 'leadership'].map(
                (category) => {
                  const items = experience.achievements.filter(
                    (a) => a.category === category,
                  )
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
                          {
                            categoryIcons[
                              category as keyof typeof categoryIcons
                            ]
                          }
                        </span>
                        <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          {category}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {items.map((achievement, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-700 leading-relaxed"
                          >
                            {achievement.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                },
              )}
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
                    {getIcon(tech)}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Skills from LinkedIn */}
            {experience.skills && experience.skills.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Key Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </animated.div>
    </div>
  )
}
