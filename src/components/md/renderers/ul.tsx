import React from "react";
import styled from "styled-components";
const UL = ({ children }) => (
  <ul className="list-none -mt-4 mb-4">{children}</ul>
);

const StyledLI = styled.li`
  &:before {
    content: "•";
    color: #fbb03b;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
`;

export const LI = ({ children }) => <StyledLI>{children}</StyledLI>;

export default UL;
