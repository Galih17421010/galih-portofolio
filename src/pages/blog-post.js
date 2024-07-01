import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./element/footer";
import Menu from "./element/menu";
import Topbar from "./element/topbar";
function Blog_Post() {
  return (
    <Fragment>
      <div className="container-fluid">
        <Menu />
        <div className="main-content-wrapper">
          <div className="container-fluid">
            <Topbar />
            <section className="blog-post-section section has-profile-image mx-auto">
              <div className="profile-holder text-center">
                <img className="profile-pic rounded-circle" src="assets/images/profil.jpg" alt="image" />
              </div>

              <div className="blog-breadcrumb">
                <NavLink className="blog-home-link" to="/blog">
                  <i className="bi bi-arrow-left"></i> Back To Blog Home
                </NavLink>
              </div>
              <div className="blog-entry">
                <article className="post" />
                <h2 className="post-title text-center py-2">Blog Post Heading Lorem Ipsum</h2>
                <div className="post-author text-center mb-3">
                  By <a href="index.html">Daniel Lopez</a>
                </div>
                <div className="post-meta">
                  <ul className="meta-list list-inline d-flex justify-content-center">
                    <li className="list-inline-item post-time">Apr 19</li>
                    <li className="list-inline-item post-length">8 min read</li>
                    <li className="list-inline-item post-comments-link">
                      <a href="#blog-comment-area">6 comments</a>
                    </li>
                  </ul>
                </div>
                <div className="post-content">
                  <p className="post-figure">
                    <img className="img-fluid rounded" src="assets/images/blog/blog-post-banner.jpg" alt="image" />
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis mattis erat, dictum facilisis magna posuere ac. Curabitur consectetur magna mauris, et aliquam lectus ornare nec. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Mauris quis tellus magna.
                  </p>
                  <figure className="blog-quote-holder p-4 p-lg-5 my-5 rounded">
                    <blockquote className="blockquote theme-custom-quote">
                      <p>
                        <i className="quote-icon fa-solid fa-quote-left d-none d-lg-inline-block"></i>You don't have to be great to start, but you have to start to be great.
                      </p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      <cite title="Source Title">Zig Ziglar</cite>
                    </figcaption>
                  </figure>
                  <p>
                    Cras adipiscing ipsum vel molestie cursus. In ultrices tristique vestibulum. Aenean ut dui diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut bibendum ipsum nec sagittis
                    ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus id ante diam. Pellentesque mauris lacus, dictum sodales elit quis, pulvinar tempus leo.{" "}
                    <a className="post-content-link" href="#">
                      This is a link
                    </a>{" "}
                    pellentesque sed leo dignissim, ornare nunc vitae, volutpat quam. Nam pellentesque tortor eu nibh porttitor congue. Sed at porta lectus.
                  </p>
                  <ul className="post-list ps-5 py-3">
                    <li>
                      Lorem <strong className="text-highlight">90% increase</strong> dolor sit amet consectetuer.
                    </li>
                    <li>
                      Aenean commodo <strong className="text-highlight">$1200</strong> ligula eget dolor.
                    </li>
                    <li>
                      Aenean massa <strong className="text-highlight">2M views</strong> cum sociis natoque penatibus.
                    </li>
                    <li>
                      Aenean ut <strong className="text-highlight">30K downloads</strong> dui diam.
                    </li>
                  </ul>
                  <h3 className="mt-5 mb-3">Code Block Example</h3>
                  <p>
                    You can get more info at{" "}
                    <a className="text-link" href="https://highlightjs.org/" target="_blank">
                      https://highlightjs.org/
                    </a>
                    . Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.{" "}
                  </p>
                  <pre>
                    <code>
                      @requires_authorization(roles=["ADMIN"]) def somefunc(param1='', param2=0): r'''A docstring''' if param1 param2: # interesting print 'Gre\'ater' return (param2 - param1 + 1 + 0b10l) or None class SomeClass: pass
                      message = '''interpreter ... prompt'''
                    </code>
                  </pre>
                  <h3 className="post-content-heading">Blog Post Section Heading Lorem</h3>
                  <p>
                    Pellentesque mattis scelerisque nibh eu tincidunt. Phasellus feugiat arcu eget sem tincidunt aliquam. Integer eleifend risus quis venenatis scelerisque. Nulla egestas commodo dignissim. Curabitur vel imperdiet diam.
                    Suspendisse faucibus tincidunt sem, faucibus dictum eros rutrum sit amet. Nulla volutpat bibendum urna, eu dignissim libero elementum in.
                  </p>
                  <p>
                    Morbi vulputate bibendum fringilla. Sed fermentum nisi laoreet, porttitor ipsum et, vehicula diam. Fusce iaculis turpis dolor, et cursus arcu cursus vel. Ut lobortis tellus ornare ultrices tristique. Praesent cursus, mi
                    ac rutrum ultrices, lectus erat pellentesque urna, at placerat eros nisi vitae ligula. Fusce eget lacus non ipsum vestibulum consequat. Nulla eleifend magna et urna vulputate, vitae volutpat magna varius.{" "}
                  </p>
                  <ul className="post-list list-unstyled ps-4 py-3">
                    <li>
                      <i className="bi bi-check me-2"></i>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </li>
                    <li>
                      <i className="bi bi-check me-2"></i>Aliquam tincidunt mauris eu risus.
                    </li>
                    <li>
                      <i className="bi bi-check me-2"></i>Vestibulum auctor dapibus neque.
                    </li>
                    <li>
                      <i className="bi bi-check me-2"></i>Sagittis tempus lacus enim ac dui.
                    </li>
                  </ul>
                  <p>
                    Cras pharetra dolor dui, non aliquet diam faucibus sed. Mauris interdum arcu nec rutrum ornare. Suspendisse pharetra quam eu sapien egestas, a egestas tortor rhoncus. Quisque adipiscing tincidunt tellus a vehicula.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque ornare lorem elit, a aliquet nisl auctor vitae.
                  </p>
                  <h3 className="post-content-heading">Blog Post Section Heading Lorem Ipsum</h3>
                  <p>
                    Phasellus ligula dolor, fringilla at tincidunt non, fringilla eu justo. Sed hendrerit mauris quis hendrerit mollis. Vivamus vitae ultrices quam. Duis sed mi leo. Curabitur facilisis, erat vel egestas tincidunt, nisi
                    ipsum ultricies velit, non scelerisque magna mi non nibh. Etiam blandit odio quis congue feugiat. Vivamus faucibus eu augue et ultrices. Phasellus nec euismod enim. Proin quis tellus auctor, porta risus vitae, pharetra
                    sem. Curabitur fringilla tellus justo. Vestibulum scelerisque rhoncus blandit. Vivamus cursus bibendum suscipit. Ut vel ornare sapien. Mauris sit amet mollis erat. Phasellus gravida nisi vel consectetur luctus.
                  </p>
                </div>

                <div className="post-tags py-5">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <strong>Tags:</strong>
                    </li>
                    <li className="list-inline-item">
                      <span className="badge tag-badge">appdev</span>
                    </li>
                    <li className="list-inline-item">
                      <span className="badge tag-badge">tutorial</span>
                    </li>
                    <li className="list-inline-item">
                      <span className="badge tag-badge">react</span>
                    </li>
                    <li className="list-inline-item">
                      <span className="badge tag-badge">javascript</span>
                    </li>
                  </ul>
                </div>
                <nav className="post-nav d-flex justify-content-between mb-5">
                  <div className="nav-previous">
                    <a href="#" rel="prev">
                      <i className="bi bi-arrow-left me-2"></i>Previous
                    </a>
                  </div>
                  <div className="nav-next">
                    <a href="#" rel="next">
                      Next<i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </div>
                </nav>
                <div id="blog-comment-area" className="blog-comment-area">
                  <div className="comment-container">
                    <div className="comment-list">
                      <h3 className="title">6 Comments</h3>
                      <div className="comment-item depth-1 parent">
                        <div className="comment-item-box d-flex p-0 p-lg-4 mb-5 rounded">
                          <div className="comment-author col-auto me-2">
                            <img className="img-fluid" src="assets/images/blog/user-4.jpg" alt="" />
                          </div>
                          <div className="comment-body col">
                            <cite className="name">Sarah Doe Says:</cite>
                            <p className="time">Apr 23 at 3:16pm</p>
                            <div className="content">
                              <p>You can click the reply button of this comment to see an example of the reply form. 👇😊 </p>
                            </div>
                            <a className="comment-reply-link btn btn-secondary" href="#respond-1" data-bs-toggle="collapse" role="button" aria-expanded="false">
                              Reply
                            </a>
                            <div id="respond-1" className="collapse">
                              <div className="comment-reply-holder p-0 p-lg-5 my-3 rounded">
                                <h4 id="reply-title" className="reply-title mb-3" aria-level="1">
                                  Reply to Sarah Doe
                                </h4>
                                <form id="reply-form" className="reply-form form" method="post" action="#">
                                  <div className="row g-3">
                                    <div className="col-12 ">
                                      <label className="sr-only" htmlFor="ccomment">
                                        Leave a Comment
                                      </label>
                                      <textarea className="form-control" id="reply-comment" name="reply-comment" placeholder="Leave your reply" rows="12" required></textarea>
                                    </div>
                                    <div className="col-md-6 col-12">
                                      <label className="sr-only" htmlFor="rname">
                                        Name
                                      </label>
                                      <input type="text" className="form-control" id="rname" name="name" placeholder="Name" minLength="2" required />
                                    </div>
                                    <div className="col-md-6 col-12 ">
                                      <label className="sr-only" htmlFor="remail">
                                        Email
                                      </label>
                                      <input type="email" className="form-control" id="remail" name="email" placeholder="Email" required />
                                    </div>
                                    <div className="col-12 ">
                                      <button type="submit" className="btn btn-secondary">
                                        Post Reply
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="children">
                          <div className="comment-item depth-2 child">
                            <div className="comment-item-box d-flex p-0 p-lg-4 mb-5 rounded">
                              <div className="comment-author col-auto me-2">
                                <img className="img-fluid" src="assets/images/blog/user-2.jpg" alt="" />
                              </div>
                              <div className="comment-body col">
                                <cite className="name">Sam Oliver Says:</cite>
                                <p className="time">Apr 23 at 4:23pm</p>
                                <div className="content">
                                  <p>
                                    Proin ut condimentum ante. Donec in urna dapibus massa sodales varius et eu eros. Integer ac turpis sed dui pulvinar consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
                                    pellentesque eu lorem sit amet elementum. Cras et mauris ac turpis maximus tempor vitae a lectus.{" "}
                                  </p>
                                </div>
                                <a className="comment-reply-link btn btn-secondary" href="#">
                                  Reply
                                </a>
                              </div>
                            </div>
                            <div className="children">
                              <div className="comment-item depth-3 child">
                                <div className="comment-item-box d-flex p-0 p-lg-4 mb-5 rounded">
                                  <div className="comment-author col-auto me-2">
                                    <img className="img-fluid" src="assets/images/blog/user-4.jpg" alt="" />
                                  </div>
                                  <div className="comment-body col">
                                    <cite className="name">Sarah DoeSays:</cite>
                                    <p className="time">Apr 23 at 8:16pm</p>
                                    <div className="content">
                                      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean finibus risus id elit tempor, id blandit sapien accumsan.</p>
                                    </div>
                                    <a className="comment-reply-link btn btn-secondary" href="#">
                                      Reply
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="comment-item depth-1 parent">
                        <div className="comment-item-box d-flex p-0 p-lg-4 mb-5 rounded">
                          <div className="comment-author col-auto me-2">
                            <img className="img-fluid" src="assets/images/blog/user-1.jpg" alt="" />
                          </div>
                          <div className="comment-body col">
                            <cite className="name">Tom Wang Says:</cite>
                            <p className="time">May 08 at 13:10pm</p>
                            <div className="content">
                              <p>Sed condimentum vel quam ut sagittis. Aliquam erat enim, lobortis sit amet tellus accumsan, scelerisque porttitor sem. Suspendisse dictum risus id iaculis sodales phasellus id ex aliquam.</p>
                            </div>
                            <a className="comment-reply-link btn btn-secondary" href="#">
                              Reply
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="comment-item depth-1 parent">
                        <div className="comment-item-box d-flex p-0 p-lg-4 mb-5 rounded">
                          <div className="comment-author col-auto me-2">
                            <img className="img-fluid" src="assets/images/blog/user-0.jpg" alt="" />
                          </div>
                          <div className="comment-body col">
                            <cite className="name">Anonymous Says:</cite>
                            <p className="time">May 09 at 13:12pm</p>
                            <div className="content">
                              <p>Sed condimentum?</p>
                            </div>
                            <a className="comment-reply-link btn btn-secondary" href="#">
                              Reply
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="comment-item depth-1 parent">
                        <div className="comment-item-box d-flex p-0 p-lg-4 mb-5 rounded">
                          <div className="comment-author col-auto me-2">
                            <img className="img-fluid" src="assets/images/blog/user-3.jpg" alt="" />
                          </div>
                          <div className="comment-body col">
                            <cite className="name">Dave Morgan Says:</cite>
                            <p className="time">May 12 at 9:35am</p>
                            <div className="content">
                              <p>Nunc in urna eu lorem accumsan placerat vel eu turpis. Etiam laoreet posuere mauris, id pharetra orci molestie sit amet. Duis pretium diam ex, vitae eleifend diam ornare sit amet. </p>
                            </div>
                            <a className="comment-reply-link btn btn-secondary" href="#">
                              Reply
                            </a>
                          </div>
                        </div>
                        <div className="children">
                          <div className="comment-item depth-2 child">
                            <div className="comment-item-box d-flex p-0 p-lg-4 mb-5 rounded">
                              <div className="comment-author col-auto me-2">
                                <img className="img-fluid" src="assets/images/blog/user-4.jpg" alt="" />
                              </div>
                              <div className="comment-body col">
                                <cite className="name">Sam Oliver Says:</cite>
                                <p className="time">May 12 at 4:23pm</p>
                                <div className="content">
                                  <p>Thanks!</p>
                                </div>
                                <a className="comment-reply-link btn btn-secondary" href="#">
                                  Reply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="comment-form-holder">
                    <h4 className="title mb-3">Leave a comment</h4>
                    <form id="comment-form" className="comment-form form" method="post" action="#">
                      <div className="row g-3">
                        <div className="col-12 col-md-6">
                          <label className="sr-only" htmlFor="cname">
                            Name
                          </label>
                          <input type="text" className="form-control" id="cname" name="name" placeholder="Name" minLength="2" required />
                        </div>
                        <div className="col-md-6 col-12 ">
                          <label className="sr-only" htmlFor="cemail">
                            Email
                          </label>
                          <input type="email" className="form-control" id="cemail" name="email" placeholder="Email" required />
                        </div>
                        <div className="col-12">
                          <label className="sr-only" htmlFor="ccomment">
                            Leave a Comment
                          </label>
                          <textarea className="form-control" id="ccomment" name="comment" placeholder="Leave your comment" rows="12" required></textarea>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-secondary">
                            Post Comment
                          </button>
                        </div>
                      </div>
                      <div id="form-messages"></div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default Blog_Post;
