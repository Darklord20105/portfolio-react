import React from 'react';
import myPhoto from "../../assets/img/about.jpg"

const Bio = () => {
	return (
		<div className="row">
			<div className="col-lg-6 mt-5">
				<div className="about-img">
					<img src={myPhoto} className="about-img-info" alt="personal" />
					<span className="about-img-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
					</span>
				</div>
			</div>
			<div className="col-lg-6 mt-5">
				<div className="about-content">
					<h3 >I am <span className="primary-color">Omar HJ</span> Darklord</h3>
					<p>
						I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
					</p>
					<ul>
						<li><b>Full Name</b> Omar HJ</li>
						<li><b>Age</b> 28 Years</li>
						<li><b>Nationality</b> Syrian</li>
						<li><b>Languages</b> Arabic, English, French</li>
						<li><b>Address</b> 121 King Street, Melbourne, Australia</li>
						<li><b>Freelance</b> Available</li>
					</ul>
					<button className="btn btn-success btn-lg">DownLoad My CV</button>
				</div>
			</div>
		</div>
	);
};

export default Bio;
