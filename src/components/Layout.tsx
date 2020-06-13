import React from "react";
import styled from "styled-components";
import Head from "./Head";
import LocaleSwitcher from "./LocaleSwitcher";
import Footer from "./Footer";
import GlobalStyle from "./styles/GlobalStyle";
import Navigation from "./Navgitation";
import { motion } from "framer-motion";
// import Alerts from "./Alerts";
import useTranslation from "../hooks/useTranslation";

const Page = styled.div`
  min-height: 100vh;
  padding: 0;
  position: relative;
  margin: 0;
  background: ${(props) => props.theme.background};
  background-image: url("/images/topography.svg");
  background-color: ${(props) => props.theme.background};
  border-bottom: 3px solid ${(props) => props.theme.color.gold};

  overflow: hidden;
  overflow-y: auto;
  z-index: 1;
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    color: white;
    padding: 8px;
    z-index: 100;
    &:focus {
      top: 0;
    }
  }
`;

const Content = styled(motion.main)`
  width: ${(props) => (props.fullPage ? "100%" : "80%")};
  max-width: 1000px;
  margin: auto;
  margin-bottom: 60px;
  @media (min-width: ${(props) => `${props.theme.layout.contentWidth}px`}) {
    /*     width: 100%; */
    padding-top: 60px;
  }
`;

let easing = [0.175, 0.85, 0.42, 0.96];
const variants = {
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.5, ease: easing, staggerChildren: 0.1 },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easing },
  },
};

interface IOpenGraph {
  title: string;
  type: string;
  image: string;
  url: string;
  audio?: string;
  description?: string;
  determiner: string;
  locale?: string;
  localeAlternate?: string;
  siteName?: string;
  video?: string;
}

interface ILayout {
  title: string;
  description: string;
  og: IOpenGraph;
  children?: any;
  preview?: any;
  sizing?: any;
  fullPage?: boolean;
}

const Layout = ({
  title,
  description,
  og,
  children,
  preview = false,
  sizing = { width: "80%", contentPaddingTop: "60px" },
  fullPage = false,
}: ILayout) => {
  const { t } = useTranslation();
  return (
    <>
      <GlobalStyle />
      <Page>
        <Head title={title} description={description} og={og} />
        <a className="skip-link" href="#maincontent">
          {t("common")["skipToMain"]}
        </a>
        <Navigation sizing={sizing} />
        <Content
          id="maincontent"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
          sizing={sizing}
          fullPage={fullPage}
        >
          {" "}
          {children}
          {/* <Alerts /> */}
          <LocaleSwitcher />
        </Content>
      </Page>
      <Footer />
    </>
  );
};

export default Layout;
