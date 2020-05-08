import React from "react";
import styled from "styled-components";
import Link from "next/link";
import useTranslation from "../hooks/useTranslation";
import { useRouter } from "next/router";
import { motion, AnimateSharedLayout } from "framer-motion";

const ActiveLinks = [
  { tKey: "navigation_Home", path: "" },
  { tKey: 'navigation_Blog', path: 'blog' },
  { tKey: "navigation_About", path: "about" },
  { tKey: "navigation_Uses", path: "uses" },
  { tKey: 'navigation_Projects', path: 'projects' },
  { tKey: "navigation_Contact", path: "contact" },
];

const NavgitationStyles = styled.nav`
  background: black;
  position: fixed;
  bottom:0;
  width:100%;
  display:flex;
  border-top: 1px solid ${(props) => props.theme.color.accent};
  border-bottom: none;
  z-index: 5;
  @media (min-width: 820px) {
    bottom: unset;
    top:0;
    width: 600px;
    background: ${props => props.theme.background};
    border-top: none;
    border-bottom: 1px solid ${props => props.theme.color.accent};
    margin:auto;
    left: 50%;
    transform: translateX(-300px);
  }
  .nav-selected {
    /* background: ${(props) => props.theme.color.accent}; */
    background: black;
    height: 100%;
    width: 100%;
    position: absolute;
    bottom:0;
    z-index: -1;
  }
`;

const StyledMenuLink = styled(motion.a)`
  font-size: 20px;
  font-size: max(18px, min(2vw, 22px));
  padding: 12px 0;
  color: ${(props) => (props.current ? "black" : "white")};
  cursor: pointer;
  flex-grow: 2;
  text-align: center;
  font-weight: ${(props) => (props.current ? "600" : "400")};
  position: relative;
`;

const Navigation = () => {
  const { locale, t } = useTranslation();
  const { pathname } = useRouter();

  const isCurrentPath = (path) => {
    return pathname === `/[lang]${path}` || pathname === `/[lang]/${path}`;
  };

  return (
    <AnimateSharedLayout>
      <NavgitationStyles>
        {ActiveLinks.map(({ tKey, path }, i) => (
          <Link href={`/[lang]/${path}`} as={`/${locale}/${path}`} key={i}>
            <StyledMenuLink current={isCurrentPath(path)} animate key={i}>
              {isCurrentPath(path) && (
                <motion.div
                  layoutId="nav-selected"
                  className="nav-selected"
                  style={{ backgroundColor: "#FBB03B" }}
                />
              )}
              {t("common")[tKey]}
            </StyledMenuLink>
          </Link>
        ))}
      </NavgitationStyles>
    </AnimateSharedLayout>
  );
};
export default Navigation;
