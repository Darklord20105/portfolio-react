import React from 'react';
import './bio.css';

const Bio = () => {
	return (
		<section id="about-a">
			<h2 className="section-heading">About Me</h2>
			<p className="section-subheading text-muted">let Me tell you about myself</p>
			<div className="info">
				<img src="./img/about.jpg" className="img-info" alt="" />
				<div className="txt-info">
					<h3 className="heading-3">Your Project is in Safe Hands</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam perferendis blanditiis culpa
						deserunt officiis voluptas? Velit pariatur voluptatum excepturi reiciendis, quas molestiae
						accusamus quos labore eos? Omnis iure qui a voluptas praesentium beatae cum incidunt sequi
						dicta, facilis delectus pariatur.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Bio;
