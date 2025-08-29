import React from 'react'
import { Skill } from '../types'

interface SkillCategoryProps extends Skill {}

export const SkillCategory: React.FC<SkillCategoryProps> = ({
  category,
  skills,
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