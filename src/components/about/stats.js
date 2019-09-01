import React from 'react';
import './stats.css';
const Stats = () => {
	return (
		<section className="bg-dark" id="about-b">
			<div className="container" style={{ maxWidth: 1100 + 'px' }}>
				<h3 className="text-center section-heading">Technical skills</h3>

				<div className="stats" style={{ paddingTop: 2 + 'rem' }}>
					<h4 className="Gugi ">Photography</h4>
					<div className="progress">
						<div className="stats-count" style={{ width: 100 + '%' }} />
					</div>
					<h4 className="Gugi ">Adobe illustrator</h4>
					<div className="progress">
						<div className="stats-count" style={{ width: 70 + '%' }} />
					</div>
					<h4 className="Gugi ">Adobe Photoshop</h4>
					<div className="progress">
						<div className="stats-count" style={{ width: 60 + '%' }} />
					</div>
					<h4 className="Gugi ">HTML CSS</h4>
					<div className="progress">
						<div className="stats-count" style={{ width: 100 + '%' }} />
					</div>
					<h4 className="Gugi ">Wordpress</h4>
					<div className="progress">
						<div className="stats-count" style={{ width: 70 + '%' }} />
					</div>
					<h4 className="Gugi ">React</h4>
					<div className="progress">
						<div className="stats-count" style={{ width: 70 + '%' }} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stats;
