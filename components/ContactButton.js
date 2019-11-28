import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ContactButtonStyles = styled.div`
  margin: 10px auto;
  text-align: center;
  display: flex;
  a {
    color: black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 45px;
    margin: auto;
    padding: 1em 20px;
    max-width: 160px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    svg {
      height: 100%;
      max-height: 60px;
      left: 0;
      position: absolute;
      top: 8px;
      width: 100%;
    }

    rect {
      fill: none;
      stroke: black;
      stroke-width: 2;
      stroke-dasharray: 422, 0;
      transition: all 0.35s linear;
    }

    &:hover {
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 1px;
      padding: 1em 14px;
      rect {
        stroke: url(#myGradient);
        stroke-width: 5;
        stroke-dasharray: 15, 310;
        stroke-dashoffset: 48;
        transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
      }
      * {
        background-image: linear-gradient(
          125.95deg,
          hsl(209, 100%, 49%) 0%,
          hsl(187, 71%, 50%) 50%,
          hsl(34, 100%, 50%) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    @media (max-width: 780px) {
      margin: auto;
    }
  }
`;

const ContactButton = ({ href, children }) => (
  <ContactButtonStyles>
    <Link href={href || '/contact'}>
      <a>
        <svg>
          <defs>
            <linearGradient id="myGradient">
              <stop offset="0%" stopColor="hsl(209, 100%, 49%)" />
              <stop offset="50%" stopColor="hsl(187, 71%, 50%)" />
              <stop offset="100%" stopColor="hsl(34, 100%, 50%)" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        {children}
      </a>
    </Link>
  </ContactButtonStyles>
);

export default ContactButton;
