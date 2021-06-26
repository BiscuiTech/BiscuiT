import styled from 'styled-components'

const AnchorTag = styled.a`
  --backgroundColor: ${(props) => props.theme.color.gold};
  position: relative;
  text-decoration: none;
  color: white;
  font-weight: 400;
  font-family: 'Montserrat';
  text-transform: lowercase;
  cursor: pointer;

  font-style: normal;
  font-variant: small-caps;
  color: white;
  padding: 2px 4px;
  background: linear-gradient(
    125.95deg,
    hsl(209, 100%, 49%) 0%,
    hsl(187, 71%, 50%) 50%,
    hsl(34, 100%, 50%) 100%
  );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 4px;
  transition: background-size 0.2s, border-radius 0.2s;

  &:hover {
    background-size: 4px 50px;
    border-radius: 5px;
  }
`

export default AnchorTag
