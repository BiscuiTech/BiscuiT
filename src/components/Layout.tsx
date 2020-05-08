import React, { Profiler, useEffect } from "react";
import styled from "styled-components";
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyle from "./styles/GlobalStyle";
import { onRenderCallback } from "../lib/onRenderCallback";
import Navigation from "./Navgitation";
import { motion } from "framer-motion";

const Page = styled.div`
  min-height: 100vh;
  padding: 0;
  position: relative;
	margin: 0;
	background: ${props => props.theme.background};
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
  /* height: 100%; */
  /* flex: 1 0 auto; */
  /* display: grid; */
  max-width: 1000px;
  width: 80%;
  margin: auto;
  margin-bottom: 60px;
  padding-top: 96px;
  @media (min-width:1000px) {
    width: 800px;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
	top: 0;
	left: 0;
  bottom: 0;
  right:0;
	width: 100%;
	height:100%;
  pointer-events: none;
`;

let easing = [0.175, 0.85, 0.42, 0.96];
const variants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing, staggerChildren: 0.1 } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easing }
  }
};

function debounce(func, wait, immediate?) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

const Layout = ({ title, description, /* url, ogImage,  */ children }) => {
  useEffect(() => {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    // confioguration variables
    // space between each line
    var lineSpacing = 30;

    var lineColor = 'rgba(255, 255, 255, 1)'; // RGBA supported, last value = alpha (between 0 and 1)

    // line length is calculated based on distance between mouse position and the position of a point
    // min and max are taken into account so the length of the line does not go below or above these values
    var lineMinLength = 2;
    var lineMaxLength = 10;

    // multiplier of the length of the line, the length of the line is the distance between the mouse and the point at which a line starts
    // e.g. if you cursor is at the top left and the point is at the bottom right, the distance will be 1, which is multiplied by this value
    // this value will not exceed the min/max defined above
    var lineLengthMultiplier = 20;

    var lineWidth = 0.15;

    // runtime variables
    var width;
    var height;
    var linesX;
    var linesY;
    var mouseX;
    var mouseY;

    var onResize = function () {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      linesX = Math.floor((width - (lineSpacing / 2)) / lineSpacing);
      linesY = Math.floor((height - (lineSpacing / 2)) / lineSpacing);
      canvas.width = width;
      canvas.height = height;
    };

    var draw = function () {
      requestAnimationFrame(draw);

      if (mouseX == void 0 || mouseY == void 0) {
        return;
      }

      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = lineColor;

      for (var x = 0; x < linesX; x++) {
        for (var y = 0; y < linesY; y++) {
          var screenX = (x * lineSpacing) + lineSpacing;
          var screenY = (y * lineSpacing) + lineSpacing;
          var angle = Math.atan2(screenY - mouseY, screenX - mouseX);
          var distance = Math.sqrt((mouseX - screenX) * (mouseX - screenX) + (mouseY - screenY) * (mouseY - screenY));

          var length = Math.min(Math.max(lineMinLength, distance / ((width + height) / 2) * lineLengthMultiplier), lineMaxLength);

          ctx.beginPath();
          ctx.moveTo(screenX, screenY);

          ctx.lineTo(
            screenX + length * Math.cos(angle),
            screenY + length * Math.sin(angle)
          );

          ctx.stroke();
        }
      }
    };

    window.addEventListener('resize', function () {
      onResize();
      draw();
    });

    window.addEventListener('mousemove', debounce(function (ev) {
      mouseX = ev.clientX;
      mouseY = ev.clientY;
    }, 0.1));

    onResize();

    mouseX = width / 2;
    mouseY = height / 2;

    draw();
    return () => {
      window.removeEventListener('resize', function () {
        onResize();
        draw();
      }, true)
      window.removeEventListener('mousemove', function (ev) {
        mouseX = ev.clientX;
        mouseY = ev.clientY;
      }, true)
    }

  }, [])

  if (process.browser) {
    // @ts-ignore
    /* if (Sentry !== undefined) {
      LogRocket.init('7agr7w/biscuitech');
      // @ts-ignore
      Sentry.init({
        dsn: 'https://c0e5b834500d45b88fb648ccf7c489bf@sentry.io/1838052',
        beforeSend(event, hint) {
          // Check if it is an exception, and if so, show the report dialog
          if (event.exception) {
            // plugins should also only be initialized when in the browser
            setupLogRocketReact(LogRocket);
            // @ts-ignore
            Sentry.showReportDialog({ eventId: event.event_id });
          }
          return event;
        },
      });

    } */
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${Number(vh)}px`);
    // We listen to the resize event
    window.addEventListener(
      "resize",
      debounce(() => {
        // We execute the same script as before
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${Number(vh)}px`);
      }, 400)
    );
  }
  return (
    <>
      <GlobalStyle />
      {/* <Profiler id="Page" onRender={onRenderCallback}> */}
      <Page>
        <Canvas />
        <Head
          title={title}
          description={description}
        // url={url}
        // ogImage={ogImage}
        />
        <a className="skip-link" href="#maincontent">
          Skip to main
          </a>
        <Navigation />
        {/* <Profiler id="Header" onRender={onRenderCallback}> */}
        <Header />
        {/* </Profiler> */}
        {/* <Profiler id="Content" onRender={onRenderCallback}> */}
        <Content id="maincontent" initial="initial" animate="enter" exit="exit" variants={variants} > {children}</Content>
        {/* </Profiler> */}
      </Page>
      <Footer />
      {/* </Profiler> */}
    </>
  );
};

export default Layout;
