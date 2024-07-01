import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./element/footer";
import Menu from "./element/menu";
import Topbar from "./element/topbar";
function Blog() {
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
                <h2 className="intro-name text-center">My Blog</h2>
                <div className="profile-intro text-md-center  limit-max-width mx-auto">
                  <p>Blog intro goes here. This is a space for me to share my journey as a software developer lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="section-cta text-center mt-4">
                  <NavLink className="btn btn-secondary theme-btn-cta" to="/projects">
                    View My Projects
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </section>
            <div className="blog-list-wrapper mx-auto">
              <div className="featured-blog-posts-wrapper text-center mb-5">
                <div className="featured-post-item post-item rounded row g-0 mx-auto">
                  <div className="post-item-image col-12 col-md-3 col-lg-4 rounded-start-2"></div>
                  <div className="post-item-body col-12 col-md-9 col-lg-8 text-start">
                    <div className="content-holder-inner">
                      <h3 className="post-title d-flex justify-content-between align-items-top">
                        <span>How To Write A Software Developer Resume</span>
                        <span className="title-icon-holder">
                          <i className="bi bi-arrow-right-short"></i>
                        </span>
                      </h3>
                      <p className="post-intro mb-0">
                        Featured blog post excerpt goes here sed faucibus placerat quam, et congue libero mollis congue. In placerat lectus et diam ornare dignissim. Etiam vulputate non felis egestas euismod. Donec in purus sed tortor
                        dignissim pharetra ut vel turpis...
                      </p>
                      <div className="post-tags my-3">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="badge tag-badge">appdev</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="badge tag-badge">tutorial</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="badge tag-badge">react</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-footer">
                      <div className="post-meta d-flex justify-content-between">
                        <div className="meta-single d-flex">19 Apr</div>
                        <ul className="meta-list list-inline d-flex mb-0">
                          <li className="list-inline-item post-time me-2">8 min read</li>
                          <li className="list-inline-item  post-comments-count">
                            <i className="bi bi-chat-square-text-fill me-2"></i>28
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <NavLink to="/blog-post" className="link-mask"></NavLink>
                </div>
              </div>
              <div className="row g-5 justify-content-center">
                <div className="post-item col-12 col-md-6 col-lg-6">
                  <div className="post-item-inner d-flex flex-column">
                    <div className="post-item-body">
                      <h3 className="post-title d-flex justify-content-between align-items-top">
                        <span>How to Build a React Project with Create React App</span>
                        <span className="title-icon-holder">
                          <i className="bi bi-arrow-right-short"></i>
                        </span>
                      </h3>
                      <p className="post-intro mb-0">Post excerpt goes here consectetur adipiscing elit. Proin lobortis mattis erat...</p>
                      <div className="post-tags my-3">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="badge tag-badge">appdev</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="badge tag-badge">tutorial</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="badge tag-badge">react</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-footer mt-auto">
                      <div className="meta d-flex justify-content-between">
                        <div className="meta-single d-flex">26 Mar</div>
                        <ul className="meta-list list-inline d-flex mb-0">
                          <li className="list-inline-item post-time me-2">3 min read</li>
                          <li className="list-inline-item  post-comments-count">
                            <i className="bi bi-chat-square-text-fill me-2"></i>4
                          </li>
                        </ul>
                      </div>
                    </div>
                    <NavLink to="/blog-post" className="link-mask"></NavLink>
                  </div>
                </div>
                <div className="post-item col-12 col-md-6 col-lg-6">
                  <div className="post-item-inner">
                    <div className="post-item-body">
                      <h3 className="post-title d-flex justify-content-between align-items-top">
                        <span>Best Resources To Learn Python From Beginner to Advanced</span>
                        <span className="title-icon-holder">
                          <i className="bi bi-arrow-right-short"></i>
                        </span>
                      </h3>
                      <p className="post-intro mb-0">Post excerpt goes here consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                      <div className="post-tags my-3">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="badge tag-badge">webdev</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="badge tag-badge">resource</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-footer">
                      <div className="meta d-flex justify-content-between">
                        <div className="meta-single d-flex">18 Feb</div>
                        <ul className="meta-list list-inline d-flex mb-0">
                          <li className="list-inline-item post-time me-3">2 min read</li>
                          <li className="list-inline-item  post-comments-count">
                            <i className="bi bi-chat-square-text-fill me-1"></i>8
                          </li>
                        </ul>
                      </div>
                    </div>
                    <NavLink to="/blog-post" className="link-mask"></NavLink>
                  </div>
                </div>
                <div className="post-item col-12 col-md-6 col-lg-6">
                  <div className="post-item-inner d-flex flex-column">
                    <div className="post-item-body">
                      <h3 className="post-title d-flex justify-content-between align-items-top">
                        <span>Top Side Hustles for Software Engineers</span>
                        <span className="title-icon-holder">
                          <i className="bi bi-arrow-right-short"></i>
                        </span>
                      </h3>
                      <p className="post-intro mb-0">Post excerpt goes here consectetur adipiscing elit. Proin lobortis mattis erat...</p>
                      <div className="post-tags my-3">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="badge tag-badge">entrepreneurship</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="badge tag-badge">webdev</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="badge tag-badge">appdev</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-footer mt-auto">
                      <div className="meta d-flex justify-content-between">
                        <div className="meta-single d-flex">5 Jan</div>
                        <ul className="meta-list list-inline d-flex mb-0">
                          <li className="list-inline-item post-time me-3">4 min read</li>

                          <li className="list-inline-item  post-comments-count">
                            <i className="bi bi-chat-square-text-fill me-2"></i>3
                          </li>
                        </ul>
                      </div>
                    </div>
                    <NavLink to="/blog-post" className="link-mask"></NavLink>
                  </div>
                </div>
                <div className="post-item col-12 col-md-6 col-lg-6">
                  <div className="post-item-inner d-flex flex-column">
                    <div className="post-item-body">
                      <h3 className="post-title d-flex justify-content-between align-items-top">
                        <span>Make mobile apps with React and Typescript</span>
                        <span className="title-icon-holder">
                          <i className="bi bi-arrow-right-short"></i>
                        </span>
                      </h3>
                      <p className="post-intro mb-0">Post excerpt goes here consectetur adipiscing elit. Proin lobortis mattis erat...</p>
                      <div className="post-tags my-3">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="badge tag-badge">react</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="badge tag-badge">typescript</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="badge tag-badge">appdev</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-footer mt-auto">
                      <div className="meta d-flex justify-content-between">
                        <div className="meta-single d-flex">15 Dec</div>
                        <ul className="meta-list list-inline d-flex mb-0">
                          <li className="list-inline-item post-time me-3">10 min read</li>
                          <li className="list-inline-item  post-comments-count">
                            <i className="bi bi-chat-square-text-fill me-2"></i>21
                          </li>
                        </ul>
                      </div>
                    </div>
                    <NavLink to="/blog-post" className="link-mask"></NavLink>
                  </div>
                </div>
                <div className="post-item col-12 col-md-6 col-lg-6">
                  <div className="post-item-inner d-flex flex-column">
                    <div className="post-item-body">
                      <h3 className="post-title d-flex justify-content-between align-items-top">
                        <span>Blog Post Lorem Ipsum</span>
                        <span className="title-icon-holder">
                          <i className="bi bi-arrow-right-short"></i>
                        </span>
                      </h3>
                      <p className="post-intro mb-0">Post excerpt goes here consectetur adipiscing elit. Proin lobortis mattis erat...</p>
                      <div className="post-tags my-3">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="badge tag-badge">webdev</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="badge tag-badge">javascript</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-footer mt-auto">
                      <div className="meta d-flex justify-content-between">
                        <div className="meta-single d-flex">2 Oct</div>
                        <ul className="meta-list list-inline d-flex mb-0">
                          <li className="list-inline-item post-time me-3">3 min read</li>

                          <li className="list-inline-item  post-comments-count">
                            <i className="bi bi-chat-square-text-fill me-2"></i>1
                          </li>
                        </ul>
                      </div>
                    </div>
                    <NavLink to="/blog-post" className="link-mask"></NavLink>
                  </div>
                </div>
                <div className="post-item col-12 col-md-6 col-lg-6">
                  <div className="post-item-inner d-flex flex-column">
                    <div className="post-item-body">
                      <h3 className="post-title d-flex justify-content-between align-items-top">
                        <span>Blog Post Lorem Ipsum</span>
                        <span className="title-icon-holder">
                          <i className="bi bi-arrow-right-short"></i>
                        </span>
                      </h3>
                      <p className="post-intro mb-0">Post excerpt goes here consectetur adipiscing elit. Proin lobortis mattis erat...</p>
                      <div className="post-tags my-3">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="badge tag-badge">webdev</span>
                          </li>
                          <li className="list-inline-item">
                            <span className="badge tag-badge">devops</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-item-footer mt-auto">
                      <div className="meta d-flex justify-content-between">
                        <div className="meta-single d-flex">19 Aug</div>
                        <ul className="meta-list list-inline d-flex mb-0">
                          <li className="list-inline-item post-time me-3">5 min read</li>
                          <li className="list-inline-item  post-comments-count">
                            <i className="bi bi-chat-square-text-fill me-2"></i>0
                          </li>
                        </ul>
                      </div>
                    </div>
                    <NavLink to="/blog-post" className="link-mask"></NavLink>
                  </div>
                </div>
              </div>
              <nav className="theme-pagination-nav py-5">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" aria-current="page" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
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
export default Blog;
