import React from 'react';
import './bio.css';

const Bio = () => {
	return (
		<section className="page-section" id="bio">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading text-uppercase Gugi">About Me</h2>
						<h3 className="section-subheading  text-muted">let Me tell you a bit about myself</h3>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<img src="./img/about.jpg" className="img-info" alt="" />
					</div>
					<div className="col-lg-6">
						<div className="txt-info">
							<h3 style={{ color: 'inherit', paddingBottom: '1rem' }}>Your Project is in Safe Hands</h3>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam perferendis blanditiis
								culpa deserunt officiis voluptas? Velit pariatur voluptatum excepturi reiciendis, quas
								molestiae accusamus quos labore eos? Omnis iure qui a voluptas praesentium beatae cum
								incidunt sequi dicta, facilis delectus pariatur.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Bio;
