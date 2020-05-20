import React from "react";
import styled from "styled-components";
import useTranslation from "../hooks/useTranslation";
import Link from "next/link";
import StyledAnchor from "./styles/StyledAnchor";
import { LatestBlog } from "./LatestBlog";

const Welcome = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: left;
  margin-top: 24px;
  margin-bottom: 64px;
  padding: 0;
  font-family: "Montserrat";
  font-weight: 200;
  * {
    padding: 0;
  }
  .welcome-hello {
    font-size: 28px;
    font-size: max(30px, min(3vh, 38px));
  }
  .welcome--my-name {
    font-size: 42px;
    font-size: max(40px, min(6vh, 72px));
    font-weight: 800;
    line-height: 100%;
  }
  .welcome--from {
    font-size: 20px;
    font-size: max(18px, min(4vh, 24px));
    width: 70%;
    min-width: 230px;
    margin: 0;
    word-wrap: break-word;
  }
  .welcome-hello {
    font-size: 28px;
    font-size: max(30px, min(3vh, 38px));
  }
  .welcome--my-name {
    font-size: 42px;
    font-size: max(40px, min(6vh, 72px));
    font-weight: 800;
    line-height: 100%;
  }
  .welcome--from {
    font-size: 20px;
    font-size: max(18px, min(4vh, 24px));
    width: 70%;
    min-width: 230px;
    margin: 0;
    word-wrap: break-word;
  }
`

const ShortIntro = styled.div`
  width: 100%;
  max-width: 600px;
  /* margin: auto; */
  text-align: left;
  font-size: 20px;
  font-size: max(18px, min(4vh, 24px));
  text-justify: auto;
  overflow: auto;
  /* max-width: 600px; */
  .toRight {
    margin-right: 6px;
    float: right;
  }
`;

const Home = ({ post }) => {
  const { locale, t } = useTranslation();
  return (
    <>
      <Welcome>
        <h1 className="welcome--hello">
          {t("welcome_msg")}
          <br />
          <span className="welcome--my-name">Jean-Cédric Huet</span>
        </h1>
        <p className="welcome--from">{t("i_am")}</p>
      </Welcome>
      <ShortIntro>
        <p>{t("short_intro")}</p>
        <Link href="/[lang]/about" as={`/${locale}/about`}>
          <StyledAnchor className="toRight">
            {t("common")["aboutMe"]}
          </StyledAnchor>
        </Link>
      </ShortIntro>
      <LatestBlog post={post} />
    </>
  );
};

export default Home;
