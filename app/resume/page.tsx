'use client'

import { useState } from 'react'
import { Header } from './components/Header'
import { ExperienceCard } from './components/ExperienceCard'
import { EducationCard } from './components/EducationCard'
import { SkillCategory } from './components/SkillCategory'
import { experiences, skills, education } from './data'

export default function ResumePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <Header />

          {/* Main Content - Reorganized Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 p-4 sm:p-8">
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
                      onToggle={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
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
                  Product leader and engineer with 9+ years in distributed
                  systems, SaaS, blockchain, and AI ETL. Expert in adapting to
                  new business and technical domains while building scalable
                  products and driving impact in fast-paced environments.
                  Seeking to innovate in AI enterprises with strong
                  communication, technical prowess, and vision to build the
                  future.
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
