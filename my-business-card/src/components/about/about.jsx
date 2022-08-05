import React, { Component } from 'react';
import './about.css';

class About extends Component {
	render() {
		return (
			<div className='about-main'>
				<h3>About</h3>
				<p>
					I am a front-end developer who is passionate about his work.
					Experienced with HTML, CSS, Javascript, Python (Flask), MySQL
					and React. Let’s make something great.
				</p>
				<h3>Interests</h3>
				<ul>
					<li>Robotics and Embedded designs</li>
					<li>Arduino and microcontrollers</li>
					<li>Tourism and camping</li>
					<li>Gaming</li>
				</ul>
			</div>
		);
	}
}

export default About;
