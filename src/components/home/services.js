import React from 'react';

const Services = () => {
	return (
		<section className="page-section" id="services">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading text-uppercase Gugi">Services</h2>
						<h3 className="section-subheading  text-muted">
							creating digital masterpieces and UI/UX layouts using the Latest most powerfull techniques
							for websites, Web apps and mobile applications
						</h3>
					</div>
				</div>
				<div className="row text-center">
					<div className="col-md-4">
						<span className="fa-stack fa-4x">
							<i className="fa fa-circle fa-stack-2x text-primary" />
							<i className="fa fa-laptop fa-stack-1x fa-inverse" />
						</span>
						<h4 className="service-heading">UI/UX Design</h4>
						<p className="text-muted">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo
							inventore harum ex magni, dicta impedit.
						</p>
					</div>

					<div className="col-md-4">
						<span className="fa-stack fa-4x">
							<i className="fa fa-circle fa-stack-2x text-primary" />
							<i className="fas fa-file-alt fa-stack-1x fa-inverse" />

							<i class="fas fa-file-alt" />
						</span>
						<h4 className="service-heading">Form Control</h4>
						<p className="text-muted">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo
							inventore harum ex magni, dicta impedit.
						</p>
					</div>

					<div className="col-md-4">
						<span className="fa-stack fa-4x">
							<i className="fa fa-circle fa-stack-2x text-primary" />
							<i className="far fa-question-circle fa-stack-1x fa-inverse" />
						</span>
						<h4 className="service-heading">Interaction</h4>
						<p className="text-muted">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo
							inventore harum ex magni, dicta impedit.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
