import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./element/footer";
import Menu from "./element/menu";
import Topbar from "./element/topbar";
function Projects_Detail() {
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
                <h2 className="intro-name text-center mb-4">Case Study: App Lorem Ipsum</h2>
                <div className="img-fluid mb-3">
                  <img className="img-fluid" src="assets/images/projects/case-study-banner.jpg" />
                </div>
                <div className="case-study-intro">
                  <p className="mb-4">
                    Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likely to land your next project or job. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
                    nulla nisi. In lobortis tempus sodales. Nulla blandit lectus sed sapien semper, id iaculis diam cursus.{" "}
                  </p>
                </div>
                <div className="key-results">
                  <div className="row align-content-end">
                    <div className="item col-4 text-center">
                      <i className="item-icon bi bi-graph-up-arrow"></i>
                      <div className="key-data">30%</div>
                      <div className="data-desc">more new user signups</div>
                    </div>
                    <div className="item col-4 text-center">
                      <i className="item-icon bi bi-download"></i>
                      <div className="key-data">20K </div>
                      <div className="data-desc">more app downloads </div>
                    </div>
                    <div className="item col-4 text-center">
                      <i className="item-icon bi bi-file-bar-graph"></i>
                      <div className="key-data">2.5X</div>
                      <div className="data-desc">more user retention</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="case-study-section section mx-auto">
              <div className="row gx-5">
                <div className="col-12 col-lg-3">
                  <h3 className="case-study-heading mb-3">Background</h3>
                </div>
                <div className="col-12 col-lg-9  case-study-section-content">
                  <p>
                    Project background info goes here. Fusce laoreet ornare risus, et sollicitudin turpis viverra nec. Proin eu lacinia ipsum. Curabitur porta a mi sit amet iaculis. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Pellentesque elementum tellus vel elit pharetra, et venenatis tortor condimentum.{" "}
                  </p>
                  <h4 className="py-3">Project Objectives</h4>
                  <ul className="py-3">
                    <li className="mb-3">Objective lorem ipsum dolor sit amet.</li>
                    <li className="mb-3">Pellentesque sed egestas ligula.</li>
                    <li className="mb-3">Vestibulum eget tellus vitae.</li>
                    <li className="mb-3">Sed ullamcorper eget augue nec tempus.</li>
                  </ul>
                  <h4 className="py-3">Project Challenge</h4>
                  <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque elementum tellus vel elit pharetra, et venenatis tortor condimentum. </p>
                  <ul className="py-3">
                    <li className="mb-3">Objective lorem ipsum dolor sit amet.</li>
                    <li className="mb-3">Pellentesque sed egestas ligula.</li>
                    <li className="mb-3">Vestibulum eget tellus vitae.</li>
                    <li className="mb-3">Sed ullamcorper eget augue nec tempus.</li>
                    <li>Suspendisse ante diam, bibendum a augue ut, vulputate semper leo. </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="case-study-section section mx-auto">
              <div className="row gx-5">
                <div className="col-12 col-lg-3">
                  <h3 className="case-study-heading mb-3">Solutions</h3>
                </div>
                <div className="col-12 col-lg-9 case-study-section-content">
                  <p>
                    Project background info goes here. Fusce laoreet ornare risus, et sollicitudin turpis viverra nec. Proin eu lacinia ipsum. Curabitur porta a mi sit amet iaculis. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Pellentesque elementum tellus vel elit pharetra, et venenatis tortor condimentum.{" "}
                  </p>
                  <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel faucibus nulla. Cras vulputate lacus vehicula congue suscipit. Aliquam erat volutpat.</p>
                  <div className="row g-3 mb-5">
                    <div className="col">
                      <img className="img-fluid" src="assets/images/projects/case-study-1.jpg" />
                    </div>
                    <div className="col">
                      <img className="img-fluid" src="assets/images/projects/case-study-2.jpg" />
                    </div>
                    <div className="col">
                      <img className="img-fluid" src="assets/images/projects/case-study-3.jpg" />
                    </div>
                  </div>
                  <h4 className="mb-3">Tech Stack:</h4>
                  <ul className="tech-stack list-inline">
                    <li className="list-inline-item">
                      <img className="rounded" src="assets/images/tech-icons/javascript.svg" alt="" />
                    </li>
                    <li className="list-inline-item">
                      <img className="rounded" src="assets/images/tech-icons/webpack.svg" alt="" />
                    </li>
                    <li className="list-inline-item">
                      <img className="rounded" src="assets/images/tech-icons/react.svg" alt="" />
                    </li>
                    <li className="list-inline-item">
                      <img className="rounded" src="assets/images/tech-icons/bootstrap5.svg" alt="" />
                    </li>
                    <li className="list-inline-item">
                      <img className="rounded" src="assets/images/tech-icons/html5.svg" alt="" />
                    </li>

                    <li className="list-inline-item">
                      <img className="rounded" src="assets/images/tech-icons/sass.svg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="case-study-section section mx-auto">
              <div className="row gx-5">
                <div className="col-12 col-lg-3">
                  <h3 className="case-study-heading mb-3">Results</h3>
                </div>
                <div className="col-12 col-lg-9 case-study-section-content">
                  <p className="mb-5">Project background info goes here. Fusce laoreet ornare risus, et sollicitudin turpis viverra nec. Proin eu lacinia ipsum. Curabitur porta a mi sit amet iaculis.</p>
                  <div className="result-item mb-5">
                    <div className="row">
                      <div className="col-auto">
                        <div className="result-data">30%</div>
                      </div>
                      <div className="col">
                        <div className="result-data-desc">
                          <h4>30% more lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula magna, posuere nec sollicitudin vel, dignissim a nisi. Maecenas porttitor imperdiet enim, a viverra elit commodo ac.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="result-item mb-5">
                    <div className="row">
                      <div className="col-auto">
                        <div className="result-data">2.5X</div>
                      </div>
                      <div className="col">
                        <div className="result-data-desc">
                          <h4>2.5X more lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula magna, posuere nec sollicitudin vel, dignissim a nisi. Maecenas porttitor imperdiet enim, a viverra elit commodo ac.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="result-item mb-5">
                    <div className="row">
                      <div className="col-auto">
                        <div className="result-data">60%</div>
                      </div>
                      <div className="col">
                        <div className="result-data-desc">
                          <h4>60% less lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula magna, posuere nec sollicitudin vel, dignissim a nisi. Maecenas porttitor imperdiet enim, a viverra elit commodo ac.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="result-item">
                    <div className="row">
                      <div className="col-auto">
                        <div className="result-data">20K</div>
                      </div>
                      <div className="col">
                        <div className="result-data-desc">
                          <h4>20K lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula magna, posuere nec sollicitudin vel, dignissim a nisi. Maecenas porttitor imperdiet enim, a viverra elit commodo ac.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="leadgen-section section mx-auto">
              <h3 className="section-heading text-center text-highlight"> Need Help With Your Project?</h3>
              <div className="intro text-center">Lead generation intro goes here lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat egestas dui, quis ullamcorper massa pellentesque quis. </div>
              <div className="text-center mt-4">
                <NavLink className="btn btn-secondary" to="/contact">
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
export default Projects_Detail;
