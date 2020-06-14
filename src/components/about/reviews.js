import React from "react";
import { Carousel } from "react-bootstrap"

// dummy data for testing
const data = [
    {
        name: "Zahed Kamal",
        job: "Front End Developer",
        text: "Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet. ",
    },
    {
        name: "Marielle Haag",
        job: "UI/UX Designer",
        text: "scelerisque varius morbi enim nunc faucibus a. Velit egestas dui id ornare arcu odio ut sem. ",
    },
    {
        name: "Ximena Vegara",
        job: "Backend Developer",
        text: "Quis risus sed vulputate odio ut enim. Lacus sed turpis tincidunt id aliquet risus feugiat. ",
    },
]

const ReviewSlide = (content) => {
    return (
        <div className="d-block m-auto mi-testimonial" >
            <div className="mi-testimonial-content">
                <p>{content.text}</p>

            </div>
            <div className="mi-testimonial-author">
                <h5>{content.name}</h5>
                <h6>{content.job}</h6>
            </div>
        </div >
    )
}

const Reviews = () => {
    return (
        <section className="page-section page-section-bottom" id="reviews">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2 className="section-heading text-uppercase">Reviews</h2>
                            <span className="section-heading-shadow">Reviews</span>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <Carousel
                        id="testimonials"
                        indicators={true}
                        keyboard={true}
                        touch={true}
                        slide={true}
                    >
                        {data.map(e => {
                            return (
                                <Carousel.Item>
                                    <ReviewSlide name={e.name} job={e.job} text={e.text} />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
