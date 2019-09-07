import React from 'react';
import './nav.css';

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
			<div className="container">
				<a className="navbar-brand js-scroll-trigger " href="#page-top">
					OH WEB DEV
				</a>
				<button
					className="navbar-toggler navbar-toggler-right"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					Menu_
					<i className="fa fa-bars" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav text-uppercase ml-auto">
						<li className="nav-item">
							<a className="nav-link Gugi js-scroll-trigger " href="#services">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link Gugi js-scroll-trigger " href="#portfolio">
								Portfolio
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link Gugi js-scroll-trigger " href="#bio">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link Gugi js-scroll-trigger " href="#stats">
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link Gugi js-scroll-trigger " href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
