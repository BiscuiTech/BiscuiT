import React from "react";

export const H1 = ({ children }) => (
  <h1
    className="text-4xl font-medium px-0 pt-6 pb-0"
  >
    {children}
  </h1>
);

export const H2 = ({ children }) => (
  <h2 className="text-2xl mt-6 mb-2 py-2 font-semibold tracking-wide border-yellow-400 bg-gray-900 pl-4 border-l-4">{children}</h2>
);

export const H3 = ({ children }) => (
  <h3 className="text-xl mt-2 p-0">{children}</h3>
);
