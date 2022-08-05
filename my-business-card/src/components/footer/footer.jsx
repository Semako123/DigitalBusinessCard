import React, { Component } from 'react';
import './footer.css';
import lin from './icons8-linkedin.svg';
import github from './icons8-github.svg';
import twitter from './icons8-twitter-24.svg';
import whatsapp from './icons8-whatsapp-24.svg';

class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<a href='https://www.linkedin.com/in/semako-zosu'>
					<div className='footer-icon'>
						<img src={lin} alt='logo of linkedIn ' />
					</div>
				</a>
				<a href='https://github.com/Semako123'>
					<div className='footer-icon'>
						<img src={github} alt='logo of github ' />
					</div>
				</a>
				<a
					class='twitter-timeline'
					href='https://twitter.com/Semako64784400?ref_src=twsrc%5Etfw'>
					<div className='footer-icon'>
						<img src={twitter} alt='logo of twitter ' />
					</div>
				</a>
                <a href='https://wa.me/7044746657'>
					<div className='footer-icon'>
						<img src={whatsapp} alt='logo of whatsapp ' />
					</div>
				</a>
				<script
					async
					src='https://platform.twitter.com/widgets.js'
					charset='utf-8'></script>
				
			</div>
		);
	}
}

export default Footer;
