import { createGlobalStyle } from 'styled-components';

const GlobaStyle = createGlobalStyle`
--gold: ${props => props.theme.color.gold};
--blue: ${props => props.theme.color.blue};
  html {
    --scrollbarBG: #CFD8DC;
    --thumbBG: #90A4AE;
    scroll-behavior: smooth;
  }
  body {
    padding:0;
    margin:0;
    width: 100%;
    height: 100%;
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
    font-family: ${props => props.theme.font}
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
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: calc(28px + (54 - 28) * ((100vw - 300px) / (1600 - 300)));
    margin: 0;
    padding: 6px 12px;
  }
`;

export default GlobaStyle