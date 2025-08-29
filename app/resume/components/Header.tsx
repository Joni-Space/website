import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

export const Header: React.FC = () => (
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
)