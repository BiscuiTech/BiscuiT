import { createGlobalStyle } from 'styled-components'
import Theme from '../Theme'

/* // woff
import MonoLisaWoff from '../../../public/fonts/MonoLisa-Regular.woff'
import MonoLisaItalicWoff from '../../../public/fonts/MonoLisa-RegularItalic.woff'
import MonoLisaBoldWoff from '../../../public/fonts/MonoLisa-Bold.woff'
import MonoLisaBoldItalicWoff from '../../../public/fonts/MonoLisa-BoldItalic.woff'
// woff2
import MonoLisaWoff2 from '../../../public/fonts/MonoLisa-Regular.woff2'
import MonoLisaItalicWoff2 from '../../../public/fonts/MonoLisa-RegularItalic.woff2'
import MonoLisaBoldWoff2 from '../../../public/fonts/MonoLisa-Bold.woff2'
import MonoLisaBoldItalicWoff2 from '../../../public/fonts/MonoLisa-BoldItalic.woff2'
 */
/* // woff
import MonoLisaWoff from 'src/fonts/MonoLisa-Regular.woff'
import MonoLisaItalicWoff from 'src/fonts/MonoLisa-RegularItalic.woff'
import MonoLisaBoldWoff from 'src/fonts/MonoLisa-Bold.woff'
import MonoLisaBoldItalicWoff from 'src/fonts/MonoLisa-BoldItalic.woff'
// woff2
import MonoLisaWoff2 from 'src/fonts/MonoLisa-Regular.woff2'
import MonoLisaItalicWoff2 from 'src/fonts/MonoLisa-RegularItalic.woff2'
import MonoLisaBoldWoff2 from 'src/fonts/MonoLisa-Bold.woff2'
import MonoLisaBoldItalicWoff2 from 'src/fonts/MonoLisa-BoldItalic.woff2' */

const GlobaStyle = createGlobalStyle<{ theme: typeof Theme }>`
  @font-face {
    font-family: 'MonoLisa';
    src: url('/fonts/MonoLisa-Regular.woff2') format('woff2');
    src: url('/fonts/MonoLisa-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'MonoLisa';
    src:url('/fonts/MonoLisa-Bold.woff2') format('woff2');
    src:url('/fonts/MonoLisa-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'MonoLisa';
    src:url('/fonts/MonoLisa-RegularItalic.woff2') format('woff2');
    src:url('/fonts/MonoLisa-RegularItalic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'MonoLisa';
    src:url('/fonts/MonoLisa-BoldItalic.woff2') format('woff2');
   src: url('/fonts/MonoLisa-BoldItalic.woff') format('woff');
    font-weight: 700;
    font-style: italic;
  }
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
