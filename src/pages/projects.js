import React, { Fragment } from "react";
import Footer from "./element/footer";
import Menu from "./element/menu";
import Topbar from "./element/topbar";
import { NavLink } from "react-router-dom";
function Projects() {
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
                <h2 className="intro-name text-center">My Projects</h2>
                <div className="profile-intro text-center limit-max-width mx-auto">
                  <p className="mb-4">Intro about projects goes here. Need help with your project? Book a free session with me to discuss your specific project requirements and how I can help you. </p>
                  <div className="text-center mt-4">
                    <NavLink className="btn btn-secondary" to="/contact">
                      Start A Conversation{" "}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                      </svg>
                    </NavLink>
                  </div>
                </div>
              </div>
            </section>
            <section className="projects-section section mx-auto">
              <div className="row justify-content-center gx-lg-5">
                <div className="project-item col-12 col-md-6 col-lg-12 mb-5">
                  <div className="project-item-inner row">
                    <div className="col-12 col-lg-5 col-xl-4">
                      <img className="project-thumb rounded-2 mb-3 mb-lg-0 rounded mx-auto" src="assets/images/projects/project-thumb-1.png" alt="image" />
                    </div>
                    <div className="col-12 col-lg-7 col-xl-8">
                      <h3 className="title">
                        <NavLink to="/projects-detail">Trading App Lorem</NavLink>
                      </h3>
                      <div className="intro mb-3">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus nunc, fringilla ut viverra ut, placerat sed nisl. Ut eu nisi ut arcu volutpat vehicula. </div>
                      <h4 className="subtitle">Tech Stack:</h4>
                      <ul className="tech-stack list-inline">
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/javascript.svg" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/react.svg" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/bootstrap.svg" alt="" />
                        </li>
                      </ul>
                      <NavLink to="/projects-detail" className="more-link">
                        View Case Study{" "}
                        <span className="link-arrow">
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="project-item col-12 col-md-6 col-lg-12 mb-5">
                  <div className="project-item-inner row">
                    <div className="col-12 col-lg-5 col-xl-4">
                      <img className="project-thumb rounded-2 mb-3 mb-lg-0 rounded mx-auto" src="assets/images/projects/project-thumb-11.png" alt="image" />
                    </div>
                    <div className="col-12 col-lg-7 col-xl-8">
                      <h3 className="title">
                        <NavLink to="/projects-detail">Smart TV App</NavLink>
                      </h3>
                      <div className="intro mb-3">Project summary goes here. Lorem ipsum dolor sit amet, Ut eu nisi ut arcu volutpat vehicula. </div>
                      <h4 className="subtitle">Tech Stack:</h4>
                      <ul className="tech-stack list-inline">
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/java.svg" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/javascript.svg" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/python.svg" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/swift.svg" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/kotlin.svg" alt="" />
                        </li>
                      </ul>
                      <NavLink to="/projects-detail" className="more-link">
                        View Case Study{" "}
                        <span className="link-arrow">
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="project-item col-12 col-md-6 col-lg-12 mb-5">
                  <div className="project-item-inner row">
                    <div className="col-12 col-lg-5 col-xl-4">
                      <img className="project-thumb rounded-2 mb-3 mb-lg-0 rounded mx-auto" src="assets/images/projects/project-thumb-5.png" alt="image" />
                    </div>
                    <div className="col-12 col-lg-7 col-xl-8">
                      <h3 className="title">
                        <NavLink to="/projects-detail">Web App Ipsum</NavLink>
                      </h3>
                      <div className="intro mb-3">Project summary goes here. For projects which don't have case studies you can link them to their GitHub pages instead.</div>
                      <h4 className="subtitle">Tech Stack:</h4>
                      <ul className="tech-stack list-inline">
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/nodejs.svg" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img src="assets/images/tech-icons/html5.svg" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img src="assets/images/tech-icons/css3.svg" alt="" />
                        </li>
                      </ul>
                      <NavLink to="/projects-detail" className="more-link">
                        View On Github
                        <span className="link-arrow">
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="project-item col-12 col-md-6 col-lg-12 mb-5">
                  <div className="project-item-inner row">
                    <div className="col-12 col-lg-5 col-xl-4">
                      <img className="project-thumb rounded-2 mb-3 mb-lg-0 rounded mx-auto" src="assets/images/projects/project-thumb-6.png" alt="image" />
                    </div>
                    <div className="col-12 col-lg-7 col-xl-8">
                      <h3 className="title">
                        <NavLink to="/projects-detail">Chrome Extension Maecenas</NavLink>
                      </h3>
                      <div className="intro mb-3">Project summary goes here. Sed vel vestibulum dolor. Nam nisl ipsum, tristique ut aliquam vel, dignissim eget dui. Praesent quis imperdiet ex.</div>
                      <h4 className="subtitle">Tech Stack:</h4>
                      <ul className="tech-stack list-inline">
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/typescript.svg" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/solidity.svg" alt="" />
                        </li>
                      </ul>
                      <NavLink to="/projects-detail" className="more-link">
                        View Case Study{" "}
                        <span className="link-arrow">
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="project-item col-12 col-md-6 col-lg-12 mb-5">
                  <div className="project-item-inner row">
                    <div className="col-12 col-lg-5 col-xl-4">
                      <img className="project-thumb rounded-2 mb-3 mb-lg-0 rounded mx-auto" src="assets/images/projects/project-thumb-4.png" alt="image" />
                    </div>
                    <div className="col-12 col-lg-7 col-xl-8">
                      <h3 className="title">
                        <NavLink to="/projects-detail">Data Analytics App</NavLink>
                      </h3>
                      <div className="intro mb-3">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus nunc, fringilla ut viverra ut, placerat sed nisl. </div>
                      <h4 className="subtitle">Tech Stack:</h4>
                      <ul className="tech-stack list-inline">
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/react.svg" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/vue.svg" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img className="rounded" src="assets/images/tech-icons/html5.svg" alt="" />
                        </li>
                      </ul>
                      <NavLink to="/projects-detail" className="more-link">
                        View Case Study{" "}
                        <span className="link-arrow">
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-cta text-center d-grid col-6 mx-auto">
                <a className="btn btn-secondary">
                  Load More <span className="d-none d-lg-inline">projects</span>
                </a>
              </div>
            </section>
            <section className="leadgen-section section mx-auto">
              <h3 className="section-heading text-start text-md-center text-highlight"> Need Help With Your Project?</h3>
              <div className="intro text-md-center">Lead generation intro goes here lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat egestas dui, quis ullamcorper massa pellentesque quis. </div>
              <div className="text-center mt-4">
                <NavLink to="/contact" className="btn btn-secondary">
                  Get In Touch{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                  </svg>
                </NavLink>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default Projects;
