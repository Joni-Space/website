import React from 'react'
import { Education } from '../types'

interface EducationCardProps extends Education {}

export const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  school,
  dates,
  gpa,
  focus,
  accomplishments,
}) => (
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