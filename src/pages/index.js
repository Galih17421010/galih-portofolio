import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./element/footer";
import Menu from "./element/menu";
import Topbar from "./element/topbar";

function Index() {
  return (
    <Fragment>
      <div className="container-fluid">
        <Menu />
        <div className="main-content-wrapper">
          <div className="container-fluid">
            <Topbar />
            <section className="page-intro-section section has-profile-image mx-auto">
              <div className="profile-holder text-center">
                <img className="profile-pic rounded-circle" src="assets/images/profil.jpg" alt="image" />
              </div>
              <div className="intro-holder">
                <h2 className="intro-name text-center mb-3">Galih Agus Saputra</h2>
                <div className="profile-intro text-md-center limit-max-width mx-auto">
                  <p>
                    Hi! I’m a Senior Developer with more than ten years of experience working in mobile banking apps. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Welcome to my online portfolio! Check out my{" "}
                    <a href="projects.html">latest projects and case studies</a>.
                  </p>
                </div>
              </div>
              <div className="section-cta text-center mt-4">
                <NavLink className="btn btn-secondary theme-btn-cta" to="/resume">
                  View Resume
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </NavLink>
              </div>
            </section>
            <section className="featured-projects-section section mx-auto">
              <h3 className="section-heading mb-4">Featured Projects</h3>
              <div className="section-intro mb-5 limit-max-width mx-auto text-md-center">
                Brief intro goes here. My main experience lies in building lorem ipsum dolor sit amet, consectetur adipiscing elit. I'm currently working on lacinia tristique.
              </div>
              <div className="featured-project-list container">
                <div className="row justify-content-center gy-4">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                      <img src="assets/images/projects/project-thumb-1.png" className="card-img-top" alt="image" />
                      <div className="card-body px-0">
                        <h5 className="card-title">
                          <a href="detail-project.html">Trading App</a>
                        </h5>
                        <p className="card-text mb-1">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div>
                          <a className="card-link more-link" href="detail-project.html">
                            View more{" "}
                            <span className="link-arrow">
                              <i className="bi bi-arrow-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                      <img src="assets/images/projects/project-thumb-6.png" className="card-img-top" alt="image" />
                      <div className="card-body px-0">
                        <h5 className="card-title">
                          <a href="detail-project.html">Browser Extension</a>
                        </h5>
                        <p className="card-text mb-1">Project summary goes here. Cras vehicula felis sed eros lacinia rhoncus.</p>
                        <div>
                          <a className="card-link more-link" href="detail-project.html">
                            View more{" "}
                            <span className="link-arrow">
                              <i className="bi bi-arrow-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                      <img src="assets/images/projects/project-thumb-4.png" className="card-img-top" alt="image" />
                      <div className="card-body px-0">
                        <h5 className="card-title">
                          <a href="detail-project.html">Data Analytics App</a>
                        </h5>
                        <p className="card-text mb-1">Project summary goes here. Maecenas eget finibus risus. Etiam volutpat elit pellentesque felis dignissim, tempor maximus est commodo.</p>
                        <div>
                          <a className="card-link more-link" href="detail-project.html">
                            View more{" "}
                            <span className="link-arrow">
                              <i className="bi bi-arrow-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-cta text-center mt-3">
                  <NavLink className="btn btn-secondary theme-btn-cta" to="/projects">
                    More Projects
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </section>
            <section className="skills-section section mx-auto mb-0">
              <h3 className="section-heading mb-4">Skills &amp; Experiences</h3>
              <div className="section-intro mb-5 limit-max-width text-md-center">Section intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can replace or add more tech icons below to reflect your skillset.</div>
              <div className="row tech-list justify-content-center align-items-center">
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/Javascript.svg" alt="" />
                </div>
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/Java.svg" alt="" />
                </div>
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/Typescript.svg" alt="" />
                </div>
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/React.svg" alt="" />
                </div>
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/Laravel.svg" alt="" />
                </div>
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/Bootstrap.svg" alt="" />
                </div>
                <div className="clearfix"></div>
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/jQuery.svg" alt="" />
                </div>
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/HTML5.svg" alt="" />
                </div>
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/CSS3.svg" alt="" />
                </div>
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/CodeIgniter.svg" alt="" />
                </div>
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/CSharp.svg" alt="" />
                </div>
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/PHP.svg" alt="" />
                </div>

                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/MySQL.svg" alt="" />
                </div>
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/Node.js.svg" alt="" />
                </div>
                <div className="icon-item col-4 col-md-3 col-lg-2 mb-3 mb-lg-5">
                  <img className="rounded" src="assets/images/tech-icons/MongoDB.svg" alt="" />
                </div>
              </div>
              <div className="section-cta text-center mt-4">
                <a className="btn btn-secondary theme-btn-cta" href="resume.html">
                  View Resume
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </a>
              </div>
              <div className="skill-blocks py-5 row justify-content-center">
                <div className="item col-md-6 col-lg-4 text-md-center">
                  <div className="item-icon-holder mx-md-auto">
                    <i className="item-icon bi bi-terminal"></i>
                  </div>
                  <h3 className="item-title mb-3">Web Development</h3>
                  <div className="item-desc">
                    Describe your expertise here. You can change the icon above to any of the{" "}
                    <a href="https://icons.getbootstrap.com/" targert="_blank">
                      free Bootstrap icons
                    </a>
                    , consectetur adipiscing elit. Phasellus enim quam, gravida accumsan dignissim eu.
                  </div>
                </div>
                <div className="item col-md-6 col-lg-4 text-md-center">
                  <div className="item-icon-holder  mx-md-auto">
                    <i className="item-icon bi bi-database-check"></i>
                  </div>
                  <h3 className="item-title mb-3">Database Infrastructure</h3>
                  <div className="item-desc">Describe your expertise here. You can change the icon above to any of the free Bootstrap icons, consectetur adipiscing elit. Phasellus enim quam, gravida accumsan dignissim eu.</div>
                </div>
                <div className="item col-md-6 col-lg-4 text-md-center">
                  <div className="item-icon-holder  mx-md-auto">
                    <i className="item-icon bi bi-infinity"></i>
                  </div>
                  <h3 className="item-title mb-3">DevOps</h3>
                  <div className="item-desc">Describe your expertise here. You can change the icon above to any of the free Bootstrap icons, consectetur adipiscing elit. Phasellus enim quam, gravida accumsan dignissim eu.</div>
                </div>
                <div className="item col-md-6 col-lg-4 text-md-center">
                  <div className="item-icon-holder  mx-md-auto">
                    <i className="item-icon bi bi-apple"></i>
                  </div>
                  <h3 className="item-title mb-3">
                    iOS App <br />
                    Development
                  </h3>
                  <div className="item-desc">Describe your expertise here. You can change the icon above to any of the free Bootstrap icons, consectetur adipiscing elit. Phasellus enim quam, gravida accumsan dignissim eu.</div>
                </div>
                <div className="item col-md-6 col-lg-4 text-md-center">
                  <div className="item-icon-holder  mx-md-auto">
                    <i className="item-icon bi bi-android2"></i>
                  </div>
                  <h3 className="item-title mb-3">
                    Android App <br />
                    Development
                  </h3>
                  <div className="item-desc">Describe your expertise here. You can change the icon above to any of the free Bootstrap icons, consectetur adipiscing elit. Phasellus enim quam, gravida accumsan dignissim eu.</div>
                </div>
              </div>
              <div className="section-cta text-center">
                <NavLink className="btn btn-secondary theme-btn-cta" to="/contact">
                  Get In Touch{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
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
export default Index;
