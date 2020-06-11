import React from "react";

export const H1 = ({ children }) => (
  <h1 className="text-5xl font-medium px-0 pt-6 pb-2">{children}</h1>
);

export const H2 = ({ children }) => (
  <h2 className="text-3xl mt-6 mb-2 py-2 font-semibold tracking-wide border-yellow-400 bg-gray-900 pl-4 border-l-4">
    {children}
  </h2>
);

export const H3 = ({ children }) => (
  <h3 className="text-2xl mt-4 mb-2 px-0 pl-4 py-2 font-md tracking-wide bg-gray-900">
    {children}
  </h3>
);
