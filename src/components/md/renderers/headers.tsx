import React from "react";

export const H1 = ({ children }) => (
  <h1 className="text-4xl font-medium my-6 p-0 border-b border-yellow-400">
    {children}
  </h1>
);

export const H2 = ({ children }) => (
  <h2 className="text-3xl my-4 p-0">{children}</h2>
);

export const H3 = ({ children }) => (
  <h3 className="text-xl my-2 p-0">{children}</h3>
);
