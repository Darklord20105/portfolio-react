import React from 'react';
import './stats.css';
const Stats = ({ statsData }) => {
	return (
		<section className="bg-dark page-section" id="stats">
			<div>
				<div className="container">
					<h2 className="text-center text-uppercase section-heading Gugi " style={{ color: '#f4f4f4' }}>
						Technical skills
					</h2>

					<div className="stats" style={{ paddingTop: 2 + 'rem' }}>
						{statsData.map(({ name, progStyle }, index) => {
							return (
								<div>
									<h4 className="Gugi ">{name}</h4>
									<div className="progress">
										<div className="stats-count" style={progStyle} />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stats;
