import React, { Fragment } from "react";
import Footer from "./element/footer";
import Menu from "./element/menu";
import Topbar from "./element/topbar";
function Contact() {
  return (
    <Fragment>
      <div className="container-fluid">
        <Menu />
        <div className="main-content-wrapper">
          <div className="container-fluid">
            <Topbar />
            <section className="page-intro-section section has-profile-image mx-auto ">
              <div className="profile-holder text-center">
                <img className="profile-pic rounded-circle" src="assets/images/profil.jpg" alt="image" />
              </div>
              <div className="intro-holder">
                <h2 className="intro-name text-center">Get In Touch</h2>
                <div className="contact-intro text-md-center limit-max-width mx-auto">
                  <p>Contact intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat sodales massa vitae ornare. Quisque ac ipsum quam. </p>
                </div>

                <ul className="social-list list-inline mx-auto d-block d-lg-none py-3 text-center">
                  <li className="list-inline-item me-1 me-lg-2">
                    <a href="#">
                      <i className="fa-brands fa-instagram fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item me-1 me-lg-2">
                    <a href="#">
                      <i className="fa-brands fa-github fa-fw"></i>
                    </a>
                  </li>

                  <li className="list-inline-item me-1 me-lg-2">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="contact-form-wrapper pt-3">
                <form id="contact-form" className="contact-form p-md-4 px-lg-5">
                  <h4 className="text-center mb-4">Contact Form</h4>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="sr-only" htmlFor="cname">
                        Name
                      </label>
                      <input type="text" className="form-control" id="cname" name="name" placeholder="Name" minLength="2" required />
                    </div>
                    <div className="col-md-6">
                      <label className="sr-only" htmlFor="cemail">
                        Email
                      </label>
                      <input type="email" className="form-control" id="cemail" name="email" placeholder="Email" required />
                    </div>

                    <div className="col-12">
                      <label className="sr-only" htmlFor="cmessage">
                        Your message
                      </label>
                      <textarea className="form-control" id="cmessage" name="message" placeholder="Enter your message" rows="10" required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn w-100 btn-secondary py-2">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default Contact;
