import React, { Component } from 'react';
import image from './semako.png';
import mail from './icons8-gmail.svg';
import lin from './icons8-linkedin.svg';
import './info.css';

class Info extends Component {
	render() {
		return (
			<div className='main'>
				<div className='image'></div>
				<h2>Zosu Semako</h2>
				<h4>Front-end Developer</h4>
				<a href='mailto:zosusemenoch@gmail.com'>zosusemenoch@gamil.com</a>
				<div className='grid'>
					<button> <img src={mail} alt='' className='icon'/> Gmail</button>
					<button className='linkedin'> <img src={lin} alt="" /> LinkedIn</button>
				</div>
			</div>
		);
	}
}

export default Info;
