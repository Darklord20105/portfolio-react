import React, { Component } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";


/*
  Validation Schema
*/
const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string()
    .email("Email is invalid")
    .required("Email is required"),
  phone: Yup.string().required("phone number is required"),
  message: Yup.string()
    .min(50, "message must be at least 50 letters")
    .max(1000, "message shouldn't be longer than a 1000 letter")
    .required("Can't send an empty message")
});

class Contact extends Component {
  onSubmit = fields => {
    console.log(fields);
  };
  render() {
    return (
      <section className="page-section my-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                Contact Us
              </h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          {/* Form Section */}
          <div className="row">
            <div className="col-12">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  message: ""
                }}
                validationSchema={schema}
                onSubmit={this.onSubmit}
                render={({ errors, status, touched }) => (
                  <Form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-4">
                          <Field
                            className={
                              "form-control" +
                              (errors.name && touched.name ? " is-invalid" : "")
                            }
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Your Name *"
                            required="required"
                            data-validation-required-message="Please enter your name."
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="invalid-feedback"
                          />
                          <p className="help-block text-danger" />
                        </div>
                        <div className="form-group my-4">
                          <Field
                            className={
                              "form-control" +
                              (errors.email && touched.email
                                ? " is-invalid"
                                : "")
                            }
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Your Email *"
                            required="required"
                            data-validation-required-message="Please enter your email address."
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback"
                          />
                          <p className="help-block text-danger" />
                        </div>
                        <div className="form-group my-4">
                          <Field
                            className={
                              "form-control" +
                              (errors.phone && touched.phone
                                ? " is-invalid"
                                : "")
                            }
                            name="phone"
                            id="phone"
                            type="tel"
                            placeholder="Your Phone *"
                            required="required"
                            data-validation-required-message="Please enter your phone number."
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="invalid-feedback"
                          />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <Field
                            component="textarea"
                            rows="6"
                            className={
                              "form-control" +
                              (errors.message && touched.message
                                ? " is-invalid"
                                : "")
                            }
                            name="message"
                            id="message"
                            type="text"
                            placeholder="Your Message *"
                            required="required"
                            data-validation-required-message="Please enter a message."
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="invalid-feedback"
                          />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="col-lg-12 text-center">
                        <div id="success" />
                        <button
                          className="btn btn-warning text-white btn-lg text-uppercase"
                          style={{ backgroundColor: "#fed136" }}
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              />
            </div>
            {/* <div className="col-md-6 user-info">
              <h1>hi</h1>
            </div> */}
          </div>

        </div>
      </section>
    );
  }
}

export default Contact;
