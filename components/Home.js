import React, { useEffect } from 'react';
import styled from 'styled-components';
import Ball from './Ball';
import Messages from './Messages';

const BallsWrapper = styled.div`
  width: calc(100% - 20px);
  grid-row: span 2;
  position: absolute;
  overflow: hidden;
  height: calc(100% - 120px);
  margin: -8px -36px;
  @media (max-width: 780px) {
    width: calc(100% - 20px);
    margin: -6px -12px;
  }
`;

const Home = () => {
  const balls = () => {
    const colors = ['#3CC157', '#2AA7FF', '#1B1B1B', '#FCBC0F', '#F85F36'];
    const quantity = 60;
    const arr = [];
    for (let index = 0; index < quantity; index++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      arr.push({ color });
    }
    return arr;
  };
  useEffect(() => {
    const balls = document.querySelectorAll('.ball');

    // Keyframes
    balls.forEach((el, i, ra) => {
      const to = {
        x: Math.random() * (i % 2 === 0 ? -10 : 11),
        y: Math.random() * 10,
      };

      const anim = el.animate(
        [
          { transform: 'translate(0, 0)' },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: 'alternate',
          fill: 'both',
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      );
    });
  }, []);
  return (
    <>
      <Messages />
      <BallsWrapper>
        {balls().map((b, i) => (
          <Ball
            className="ball"
            key={i}
            background={b.color}
            right={`${Math.floor(Math.random() * 100)}vw`}
            top={`${Math.floor(Math.random() * 100)}vh`}
            transform={`scale(${Math.random()})`}
            width={`${Math.random()}em`}
          />
        ))}
      </BallsWrapper>
    </>
  );
};

export default Home;
