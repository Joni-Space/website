'use client'

import { Check, Copy, Github, Linkedin, Mail } from 'lucide-react'
import type React from 'react'
import { useState } from 'react'
import { BiCopy } from 'react-icons/bi'

export const Header: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const email = 'jonathaneasterman@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <div className="flex flex-col justify-between bg-gradient-to-b from-white to-gray-50/50 px-4 sm:px-8 py-8 sm:py-12 text-center border-b border-gray-100">
      <h1 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight">
        Jonathan Easterman
      </h1>

      {/* Desktop view - full text links */}
      <div className="hidden sm:flex mt-6 justify-center items-center space-x-6 text-sm">
        <a
          href={`mailto:${email}`}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <Mail className="w-4 h-4 mr-2" />
          <span>{email}</span>
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

      {/* Mobile view - icons with email text */}
      <div className="sm:hidden flex flex-col justify-between">
        {/* Social icons */}
        <div className="flex justify-center items-center space-x-6">
          <a
            href="https://github.com/jaeaster"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/jonathan-easterman"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Email with copy functionality */}
        <button
          onClick={copyEmail}
          className="flex text-center items-center justify-center mx-auto text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
        >
          <BiCopy className="w-5 h-5 mr-2" />
          <span className="text-sm">{email}</span>
          {copiedEmail ? (
            <Check className="w-4 h-4 ml-2 text-green-600" />
          ) : (
            <Copy className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </button>
      </div>
    </div>
  )
}
