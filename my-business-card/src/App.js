import './App.css';
import React from 'react';
import Info from './components/info/info';
import About from './components/about/about';
import Footer from './components/footer/footer'

function App() {
	return (
		<div className='app'>
			<Info />
			<About />
			<Footer />
		</div>
	);
}

export default App;
