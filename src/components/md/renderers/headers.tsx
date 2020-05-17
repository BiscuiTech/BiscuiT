import React from "react";

export const H1 = ({ children }) => (
  <h1
    className="text-4xl font-medium px-0 py-6 pl-4 border-b border-yellow-400"
    style={{ backgroundColor: "hsl(200,100%,4%)" }}
  >
    {children}
  </h1>
);

export const H2 = ({ children }) => (
  <h2 className="text-3xl mt-6 p-0">{children}</h2>
);

export const H3 = ({ children }) => (
  <h3 className="text-xl mt-2 p-0">{children}</h3>
);
