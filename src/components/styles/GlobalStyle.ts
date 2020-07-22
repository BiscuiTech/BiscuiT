import { createGlobalStyle } from 'styled-components'
import Theme from '../Theme'

const GlobaStyle = createGlobalStyle<{ theme: typeof Theme }>`

  html {
    --scrollbarBG: #CFD8DC;
    --thumbBG: #90A4AE;
    --gold: ${(props) => props.theme.color.gold};
    --blue: ${(props) => props.theme.color.blue};
    --contentWidth: ${(props) => `${props.theme.layout.contentWidth}px`};
    scroll-behavior: smooth;
    height: 100%;
    overflow-x: hidden;
  }
  body {
    padding:0;
    margin:0;
    width: 100%;
    height: 100%;
    height: calc(var(--vh, 1vh) * 100);
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
    font-family: ${(props) => props.theme.font};
    color: white;
    font-size: max(18px,min(2vw, 24px));
  }
  body::-webkit-scrollbar {
    width: 11px;
  }
  body::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG) ;
    border-radius: 6px;
    border: 3px solid var(--scrollbarBG);
  }
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: 30px;
    font-size: min(max(28px,5vw),54px);
    margin: 0;
    padding: 6px 12px;
  }
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: 22px;
    font-size: min(max(20px,3vw),24px);

  }
`

export default GlobaStyle
