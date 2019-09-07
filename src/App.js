import React from 'react';
// gneral layout
import Nav from './components/shared/Nav';
// home components
import Showcase from './components/home/showcase';
import Services from './components/home/services';
// my portfolio (my work) component
import Portfolio from './components/work/Portfolio';
import portfolioLinks from './components/work/portfoliolinks';
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
