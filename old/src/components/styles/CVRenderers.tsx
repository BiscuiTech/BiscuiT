import React from 'react'

export const H1 = ({ children }) => (
  <h1 className="text-2xl text-yellow-400 font-bold p-0 mt-10 font-mono uppercase border-t border-white">
    {children}
  </h1>
)

export const H2 = ({ children }) => (
  <h2 className="text-2xl text-yellow-300 mt-6 font-medium tracking-wide font-mono text-left">
    {children}
  </h2>
)

export const H3 = ({ children }) => (
  <h3 className="text-xl mt-2 p-0 font-mono">{children}</h3>
)

export const H4 = ({ children }) => (
  <h4 className="text-lg mt-2 p-0 font-mono">{children}</h4>
)

export const HR = ({ children }) => <hr className="mt-4">{children}</hr>

export const UL = ({ children }) => (
  <ul className="list-disc pl-4">{children}</ul>
)

export const LI = ({ children }) => <li className="">{children}</li>
