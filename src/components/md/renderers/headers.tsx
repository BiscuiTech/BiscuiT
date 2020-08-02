import React from 'react'

export const H1 = ({ children }) => (
  <h1 className="text-5xl font-medium px-0 pt-6 pb-2 sm:text-3xl md:text-3xl">
    {children}
  </h1>
)

export const H2 = ({ children }) => (
  <h2 className="text-3xl mt-6 mb-2 py-2 pl-4 font-semibold tracking-wide bg-gray-900 border-yellow-400 border-l-4">
    {children}
  </h2>
)

export const H3 = ({ children }) => (
  <h3 className="text-2xl mt-4 px-0 md:pl-4 font-md tracking-wide bg-gray-900 border-l-2 border-yellow-400">
    {children}
  </h3>
)
