import React, { Component } from 'react'

export default class Facebook extends Component {
  componentDidMount(){
    var js, fjs = document.getElementsByTagName('script')[0];
    if (document.getElementById('facebook-jssdk')) return;
    js = document.createElement('script');
    js.id = 'facebook-jssdk';
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
  render() {
    return (
      <div className="fb-customerchat"
			attribution='setup_tool'
			page_id="330183527489356">
		</div>
    )
  }
}
