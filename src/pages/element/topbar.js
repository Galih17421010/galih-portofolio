import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
function Topbar() {
  return (
    <Fragment>
      <div className="top-bar text-center position-relative">
        <div className="top-bar-inner">
          <NavLink className="menu-toggler" data-bs-toggle="offcanvas" to="#offcanvasNavbar" role="button" aria-controls="offcanvasNavbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </NavLink>
          {/* <a className="menu-toggler" data-bs-toggle="offcanvas" href="#offcanvasNavbar" role="button" aria-controls="offcanvasNavbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </a> */}
          <div className="mode-toggle text-center">
            <input className="toggle" id="darkmode" type="checkbox" />
            <label className="toggle-btn mx-auto mb-0" htmlFor="darkmode">
              <span className="day-icon toggle-icon">
                <i className="bi bi-sun-fill"></i>
              </span>
              <span className="night-icon toggle-icon">
                <i className="bi bi-moon-fill"></i>
              </span>
            </label>
          </div>
          <NavLink to="/contact" className="btn btn-primary top-bar-cta">
            Hire Me
          </NavLink>
          <ul className="social-list list-inline mx-auto d-none d-lg-block">
            <li className="list-inline-item me-0 me-md-1 me-lg-2">
              <a href="#">
                <i className="fa-brands fa-github fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item me-0 me-md-1 me-lg-2">
              <a href="#">
                <i className="fa-brands fa-instagram fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item me-0 me-md-1 me-lg-2">
              <a href="#">
                <i className="fa-brands fa-linkedin-in fa-fw"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
export default Topbar;
