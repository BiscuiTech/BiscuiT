import React, { Component } from 'react'
import Link from 'next/link';
import Head from '../components/Head';
import Messages from "../components/Messages";
import Socials from "../components/Socials";
import styled, { createGlobalStyle } from 'styled-components';
import Ball from '../components/Ball'
/* import MessengerCustomerChat from 'react-messenger-customer-chat'; */

const BorderStyle = createGlobalStyle`
  #top, #bottom, #left, #right {
	  background: #a5ebff;
	  position: fixed;
	}
	#left, #right {
		top: 0; bottom: 0;
		width: 15px;
	}
	#top, #bottom {
		left: 0; right: 0;
		height: 15px;
	}
	#left {left: 0;}
	#right {right: 0;}
	#top {top: 0;}
	#bottom {bottom: 0;}

	@media (max-width: 768px) {
		#top, #bottom, #left, #right {
	  	display: none;
		}
  }
`;

const Balls = styled.div`
	width: 100%;
	height: 100%;
`;


export default class Home extends Component {
	balls = () => {
		const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
		const quantity = 60;
		let arr = [];
		for (let index = 0; index < quantity; index++) {
			const color  = colors[Math.floor(Math.random() * colors.length)];
			arr.push({color})
		}
		return arr
	}

	componentDidMount = () => {
		var js, fjs = document.getElementsByTagName('script')[0];
		if (document.getElementById('facebook-jssdk')) return;
		js = document.createElement('script');
		js.id = 'facebook-jssdk';
		js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
		fjs.parentNode.insertBefore(js, fjs);
	}

	render() {
		return (
			<React.Fragment>
				<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5C4VKCP"
				height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>
				{/* <MessengerCustomerChat
					pageID="330183527489356"
				/> */}
				<BorderStyle/>
				<div id="left"></div>
				<div id="right"></div>
				<div id="top"></div>
				<div id="bottom"></div>
				<Head title='Biscui.Tech'/>
				<Socials/>
				<Messages/>
				<Balls className="balls">
					{this.balls().map((b, i) => (
						<Ball
							className="ball"
							key={i}
							background={b.color}
							right={`${Math.floor(Math.random() * 100)}vw`}
							top={`${Math.floor(Math.random() * 100)}vh`}
							transform={`scale(${Math.random()})`}
							width={`${Math.random()}em`}
						/>)
					)}
				</Balls>
			</React.Fragment>
		)
	}
}
