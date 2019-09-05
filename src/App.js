import React from 'react';
// gneral layout
import Nav from './components/shared/Nav';
// home components
import Showcase from './components/home/showcase';
import Services from './components/home/services';
// my portfolio (my work) component
import Portfolio from './components/Portfolio';
// about components
import Bio from './components/about/bio';
import Stats from './components/about/stats';
import statsData from './components/about/statsData';
// contact form
import Contact from './components/contact/contact';
// footer
import Footer from './components/shared/footer';
import './App.css';

function App() {
	const portfolioLinks = [
		{
			title: 'Threads',
			caption: 'Illustration'
		},
		{
			title: 'Explore',
			caption: 'Graphic Design'
		},
		{
			title: 'Finish',
			caption: 'Identity'
		},
		{
			title: 'Lines',
			caption: 'Branding'
		},
		{
			title: 'Southwest',
			caption: 'Website Design'
		},
		{
			title: 'Window',
			caption: 'Photography'
		},
		{
			title: 'Pizza',
			caption: 'I love pizza!'
		}
	];

	return (
		<div className="App">
			<Nav />
			<Showcase />
			<Services />
			<Portfolio portfolioLinks={portfolioLinks} />
			<Bio />
			<Stats statsData={statsData} />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
