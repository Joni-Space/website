'use client'

import React from 'react'
import { animated, useSpring } from '@react-spring/web'
import { ChevronDown, Users, TrendingUp, Cpu, Rocket } from 'lucide-react'
import { ExperienceData } from '../types'
import { getIcon } from '../tech-icons'

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
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isOpen,
  onToggle,
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
        className="w-full text-left p-6 focus:outline-none rounded-xl"
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
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
                <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">
                  Startup
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
              {['impact', 'technical', 'innovation', 'scale', 'leadership'].map(
                (category) => {
                  const items = experience.achievements.filter(
                    (a) => a.category === category
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
                          {categoryIcons[category as keyof typeof categoryIcons]}
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
                }
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
          </div>
        )}
      </animated.div>
    </div>
  )
}