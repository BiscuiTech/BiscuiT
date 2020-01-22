import styled from 'styled-components';

const AnchorTag = styled.a`
  position: relative;
  margin: 20px auto;
  text-decoration: none;
  z-index: 1;
  color: white;
  font-weight: 400;
  justify-self: center;
  cursor: pointer;

  font-style: normal;
  color: black;
  background-image: linear-gradient(
    125.95deg,
    hsl(209, 100%, 49%) 0%,
    hsl(187, 71%, 50%) 50%,
    hsl(34, 100%, 50%) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:after {
    position: absolute;
    left: 0;
    bottom:0;
    width: 100%;
    height: 100%;
    height: 6px;
    margin-top: -10px;
    z-index: -1;
    display: block;
    content: '';
    background: #ff512f;
    box-shadow: inset -40px 0px 30px -18px #dd2476;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 250ms ease-in;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export default AnchorTag;
