import React from 'react';
import Link from 'next/link';
import Head from '../components/Head';
import Messages from "../components/Messages";
import Socials from "../components/Socials";
import { createGlobalStyle } from 'styled-components';

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

const Home = () => (
  <React.Fragment>
		{/* <!-- Google Tag Manager (noscript) --> */}
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5C4VKCP"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		{/* <!-- End Google Tag Manager (noscript) --> */}
		{/* <!-- Load Facebook SDK for JavaScript --> */}
		<div id="fb-root"></div>
		<script>(function(d, s, id) {(
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
			fjs.parentNode.insertBefore(js, fjs);
		)}(document, 'script', 'facebook-jssdk'));</script>
		{/* <!-- Your customer chat code --> */}
		<div class="fb-customerchat"
			attribution=setup_tool
			page_id="330183527489356">
		</div>
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

export default Home
