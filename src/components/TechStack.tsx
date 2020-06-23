import React from "react";
import styled from "styled-components";

export const ConfiguredTech = [
  { name: "apollo", id: "apollo", background: "#FFFFFF", color: "#000000" },
  { name: "graphql", id: "graphql", background: "#E00098", color: "#FFFFFF" },
  { name: "react", id: "react", background: "#60D9FB", color: "#FFFFFF" },
  { name: "prisma", id: "prisma", background: "#0C344B", color: "#FFFFFF" },
  {
    name: "postgresql",
    id: "postgresql",
    background: "#0071BC",
    color: "#FFFFFF",
  },
  { name: "next.js", id: "nextjs", background: "#000000", color: "#FFFFFF" },
];

const TechStackStyles = styled.div<{ imageHeight: number }>`
  transform: ${(props) => `translate3d(0,-${props.imageHeight + "px"},0)`};
  width: 100%;
  height: 100%;
  h4 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 17px;
    margin: 12px;
    margin-bottom: -2px;
    font-variant: small-caps;
  }
  ul {
    display: flex;
    padding: 0 12px;
  }
`;

export const TechPill = styled.span<{
  styles: { background: string; color: string };
}>`
  background: ${(props) => `${props.styles.background}`};
  color: ${(props) => `${props.styles.color}`};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  font-family: "Source Code Pro";
  line-height: 18px;
  text-align: center;
  text-transform: lowercase;
  flex: none;
  order: 0;
`;

export function getTechStyles(id: string) {
  const payload = ConfiguredTech.filter((el) => {
    return el.id === id;
  });
  return payload[0];
}

const TechStack = ({ imageHeight, info }) => {
  return (
    <TechStackStyles imageHeight={imageHeight}>
      <h4>Tech Stack</h4>
      <ul>
        {info.map((el, i) => {
          const styles = getTechStyles(el);
          return (
            <TechPill
              key={i}
              styles={styles}
              className="self-start py-1 px-2 m-2"
            >
              {styles.name}
            </TechPill>
          );
        })}
      </ul>
    </TechStackStyles>
  );
};

export default TechStack;
