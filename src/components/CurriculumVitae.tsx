import React from "react";
import { useWindupString, WindupChildren, Pace, useSkip } from "windups";
// import * as content from "../content/cv";
import styled, { keyframes } from "styled-components";
import { SubHeader } from "./styles/PageHeader";
// import useTranslation from "../hooks/useTranslation";
import MDX from "@mdx-js/runtime";
// import CVen from "../content/cv/en.mdx";
import { H1, H2, H3, H4, HR, UL, LI } from "./styles/CVRenderers";
import useTranslation from "../hooks/useTranslation";
const ScrollDownKeyframes = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(16px);
  }
`;

const ScrollDown = styled.div`
  display: block;
  margin: 0 auto;
  width: 26px;
  height: 46px;
  border-radius: 13px;
  border: 2px solid #fbb03b;
  margin-block-end: 10vh;
  span {
    display: block;
    margin: 6px auto;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #fbb03b;
    border: 1px solid transparent;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-name: ${ScrollDownKeyframes};
  }
`;
const StyledCV = styled.div`
  /* width: 100%;
  margin: auto; */
  /*  margin-bottom: 10%; */
  * {
    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
      monospace;
  }
  p:not(:last-child) {
    margin: 0.5em 0;
  }
`;

const SkipButton = () => {
  const skip = useSkip();
  const { t } = useTranslation();
  return (
    <span className="rounded-md shadow-sm justify-end">
      <button
        onClick={skip}
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-yellow-400 text-xs leading-4 font-medium rounded text-yellow-400 hover:text-black hover:bg-yellow-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
      >
        {t("skipButton")}
      </button>
    </span>
  );
};

const DownloadButton = () => {
  const { t, locale } = useTranslation();
  const download = (e) => {
    e.preventDefault();
    console.log(`Downloading ${locale} version`);
  };
  return (
    <span className=" rounded-md shadow-sm justify-end mx-2">
      <button
        onClick={download}
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-yellow-400 text-xs leading-4 font-medium rounded text-yellow-400 hover:text-black hover:bg-yellow-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
      >
        {t("downloadButton")}
      </button>
    </span>
  );
};

const CurriculumVitae = ({ cv }) => {
  return (
    <>
      <ScrollDown>
        <span />
      </ScrollDown>
      <SubHeader>Curriculum Vitae</SubHeader>
      {/* <div className="min-h-screen"> */}
      <StyledCV className="font-mono text-lg bg-black border-yellow-500 border-2 border-dashed p-4 relative text-gray-300 leading-snug text-justify min-h-screen">
        <WindupChildren>
          <div className="flex flex-end justify-end">
            <SkipButton />
            <DownloadButton />
          </div>
          <Pace ms={6}>
            <MDX
              components={{
                h1: H1,
                h2: H2,
                h3: H3,
                h4: H4,
                hr: HR,
                ul: UL,
                li: LI,
              }}
            >
              {cv.content}
            </MDX>
          </Pace>
        </WindupChildren>
      </StyledCV>
      {/* </div> */}
    </>
  );
};

export default CurriculumVitae;
