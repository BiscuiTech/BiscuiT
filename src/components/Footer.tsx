import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Image, Transformation } from "cloudinary-react";
import useTranslation from "../hooks/useTranslation";

const FooterStyles = styled.div`
  position: sticky;
  bottom:0;
  width: 100%;
  /* height: 25vh; */
  min-height: 180px;
  background: #0c344b;
  background: linear-gradient(330deg, hsl(200, 75%, 25%) 5%, hsl(200, 72%, 17%) 87%);
  /* margin-top: 24px; */
  padding: 48px 0;
  border-top: 4px solid ${props => props.theme.color.gold};
  color: white;
  font-weight: 300;
  text-align: center;
  flex-shrink: 0;
  a {
    margin: 0 6px;
  }
  img {
    margin: 0 6px;
    cursor: pointer;
  }
  a {
    font-size: 14px;
    margin: 6px;
  }
  .social-logo {
    height: auto;
    width: 40px;
  }
  .archives {
    position: absolute;
    bottom: 2px;
    width: 100%;
    text-align: center;
    color: hsl(0, 0%, 100%, 70%);
    font-size: 12px;
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 420px) {
    display: grid;
    grid-template: 1fr 1fr / 10% 1fr 1fr 1.5fr 10%;
    grid-template-areas:
      ". logo facebook linkedin  ."
      ". logo twitter github  .";
    & > a:nth-child(1) {
      justify-self: right;
    }
    & > a:nth-child(4) {
      justify-self: right;
    }
  }
`;

/*
TODO: scroll to top button

*/

const Footer = () => {
  const { locale } = useTranslation();

  return (
    <FooterStyles>
      <Grid>
        <a
          href="https://www.facebook.com/biscuittech/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ gridArea: "facebook" }}
        >
          <img
            src="/facebook.svg"
            width="50px"
            height="50px"
            alt="Facebook Icon \& link"
            className="social-logo"
          />
        </a>
        <a
          href="https://ca.linkedin.com/in/jean-c%C3%A9dric-huet-7a0949a3"
          target="_blank"
          rel="noopener noreferrer"
          style={{ gridArea: "linkedin" }}
        >
          <img
            src="/linkedin.svg"
            width="50px"
            height="50px"
            alt="LinkedIn Icon \& link"
            className="social-logo"
          />
        </a>
        <Link href="/[lang]" as={`/${locale}`}>
          <Image
            publicId="biscui.tech/Biscuit.png"
            cloudName="biscuitech"
            alt="BiscuiTech Logo"
            style={{ gridArea: "logo", placeSelf: "left" }}
          >
            <Transformation height="80" crop="scale" />
          </Image>
        </Link>
        <a
          href="https://twitter.com/biscuitech"
          target="_blank"
          rel="noopener noreferrer"
          style={{ gridArea: "twitter" }}
        >
          <img
            src="/twitter.svg"
            width="50px"
            height="50px"
            alt="Twitter Icon \& link"
            className="social-logo"
          />
        </a>
        <a
          href="https://github.com/biscuitech"
          target="_blank"
          rel="noopener noreferrer"
          style={{ gridArea: "github" }}
        >
          <img
            src="/github.svg"
            width="50px"
            height="50px"
            alt="GitHub Icon \& link"
            className="social-logo"
          />
        </a>
      </Grid>
      <a href="https://github.com/BiscuiTech/BiscuiT">This website is open source. View the code here. 👨‍💻</a>
      <div className="archives">
        {/* <Link href="/[lang]/archives" as={`/${locale}/archives`}>
          <a>To access previous version of this site, view the archives. 🔓</a>
        </Link> */}
        <a href="https://github.com/BiscuiTech/BiscuiT">To access previous version of this site, view the archives. 🔓</a>
      </div>
    </FooterStyles>
  );
};

export default Footer;
