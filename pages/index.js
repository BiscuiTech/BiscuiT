import React, { Component } from 'react'
import Link from 'next/link';
import Head from '../components/Head';
import Messages from "../components/Messages";
import Socials from "../components/Socials";
import { createGlobalStyle } from 'styled-components';
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

export default class Home extends Component {
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
			</React.Fragment>
		)
	}
}
