import './App.css';
import React from 'react';
import Info from './components/info/info';
import About from './components/about/about';

function App() {
	return (
		<div className='app'>
			<Info />
			<About />
		</div>
	);
}

export default App;
