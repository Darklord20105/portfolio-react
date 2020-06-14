import React, { Component } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
// import axios from "axios";
import { Axios, db } from '../../firebase/firebaseConfig'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
  subject: Yup.string().required("you need to add a subject to your message"),
  message: Yup.string()
    .min(50, "message must be at least 50 letters")
    .max(1000, "message shouldn't be longer than a 1000 letter")
    .required("Can't send an empty message")
});

class Contact extends Component {

  onSubmit = (fields) => {
    console.log(fields);
    // e.preventDefault()
    this.sendEmail(fields)

  };
  sendEmail = (fields) => {
    Axios.post('https://us-central1-omarhj-portfolio-cc12d.cloudfunctions.net/submit', fields)
      .then(res => {
        db.collection('emails').add({
          name: fields.name,
          email: fields.email,
          message: fields.message,
          subject: fields.subject
        })
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  render() {
    return (
      <section className="page-section page-section-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <span className="section-heading-shadow">Contact us</span>
              </div>
            </div>
          </div>
          {/* Form Section */}
          <div className="row">
            <div className="col-md-6">
              <div className="contact-formwrapper">
                <h4>Get In Touch</h4>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                  }}
                  validationSchema={schema}
                  onSubmit={this.onSubmit}
                  render={({ errors, status, touched }) => (
                    <Form>
                      <div className="form-field">
                        <label for="name">Enter Your Name *</label>
                        <Field
                          className={
                            "form-control" +
                            (errors.name && touched.name ? " is-invalid" : "")
                          }
                          name="name"
                          id="name"
                          type="text"
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
                      <div className="form-field">
                        <label for="email">Enter Your Email *</label>
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
                      <div className="form-field">
                        <label for="subject">Enter Your Message Subject Here *</label>
                        <Field
                          className={
                            "form-control" +
                            (errors.subject && touched.subject
                              ? " is-invalid"
                              : "")
                          }
                          name="subject"
                          id="subject"
                          type="text"
                          required="required"
                          data-validation-required-message="Please enter your message Subject."
                        />
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className="invalid-feedback"
                        />
                        <p className="help-block text-danger" />
                      </div>

                      <div className="form-field">
                        <label for="message">Enter Your Message Here</label>
                        <Field
                          component="textarea"
                          rows="8"
                          className={
                            "form-control" +
                            (errors.message && touched.message
                              ? " is-invalid"
                              : "")
                          }
                          name="message"
                          id="message"
                          type="text"
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

                      <div className="form-field">
                        <button type="submit" className="primary-button">Send Message</button>
                      </div>
                    </Form>
                  )}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="user-contact_info">
                {/* phone info block */}
                <div className="contact-infoblock">
                  <span className="contact-infoblock-icon">
                    <PhoneIcon style={{ fill: "#a4acc4" }} />
                  </span>
                  <div className="contact-infoblock-content">
                    <h6>Phone</h6>
                    <p>+012-3456-7891</p>
                    <p>+012-3456-7891</p>
                  </div>
                </div>
                {/* email address block */}
                <div className="contact-infoblock">
                  <span className="contact-infoblock-icon">
                    <MailOutlineIcon style={{ fill: "#a4acc4" }} />
                  </span>
                  <div className="contact-infoblock-content">
                    <h6>E-mail</h6>
                    <p>omarhj1992@gmail.com</p>
                    <p>darklord20105@gnail.com</p>
                  </div>
                </div>
                {/* Location block */}
                <div className="contact-infoblock">
                  <span className="contact-infoblock-icon">
                    <LocationOnIcon style={{ fill: "#a4acc4" }} />
                  </span>
                  <div className="contact-infoblock-content">
                    <h6>Address</h6>
                    <p>121 King Street, Melbourne, Victoria 3000, Australia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Contact;