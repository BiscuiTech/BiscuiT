import React, { Component } from 'react';
import Link from 'next/link';
import Messages from '../components/Messages';
import Ball from '../components/Ball';
import Layout from '../components/Layout';
import Home from '../components/Home';
/* const Balls = styled.div`
  width: 100%;
  height: 100%;
`; */

export default class Index extends Component {
  /* balls = () => {
    const colors = ['#3CC157', '#2AA7FF', '#1B1B1B', '#FCBC0F', '#F85F36'];
    const quantity = 60;
    const arr = [];
    for (let index = 0; index < quantity; index++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      arr.push({ color });
    }
    return arr;
  }; */

  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}
