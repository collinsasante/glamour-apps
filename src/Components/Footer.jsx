import React from "react";
import logo_white from "../assets/images/logo_white.png";

const Footer = () => {
  return (
    <>
      <footer className="section bg-footer">
        <div className="container">
          <div className="row g-sm-4">
            <div className="col-lg-12">
              <div className="mb-3 mb-sm-0">
                <img
                  src={logo_white} // <--- Now using the imported logo_white
                  className="logo-dark" // You might want to change this className if it's a white logo
                  alt="Kasy Logo"
                  height="45"
                />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <h6 className="text-uppercase fw-semibold">About</h6>
              <ul className="list-unstyled footer-link mt-3 mb-0 fs-14">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Submit on issue</a>
                </li>
                <li>
                  <a href="#">GitHub Repo</a>
                </li>
                <li>
                  <a href="#">Slack</a>
                </li>
              </ul>
            </div>
            {/* End col */}

            <div className="col-lg-3 col-md-4 col-6">
              <h6 className="text-uppercase fw-semibold">Getting Started</h6>
              <ul className="list-unstyled footer-link mt-3 mb-0 fs-14">
                <li>
                  <a href="#">introduction</a>
                </li>
                <li>
                  <a href="#">Usage</a>
                </li>
                <li>
                  <a href="#">Globls</a>
                </li>
                <li>
                  <a href="#">Elements</a>
                </li>
                <li>
                  <a href="#">Collection</a>
                </li>
              </ul>
            </div>
            {/* End col */}

            <div className="col-lg-3 col-md-4 col-6 d-none d-sm-block">
              <h6 className="text-uppercase fw-semibold">Resources</h6>
              <ul className="list-unstyled footer-link mt-3 mb-0 fs-14">
                <li>
                  <a href="#">Monitoring Grader </a>
                </li>
                <li>
                  <a href="#">Video Tutorial</a>
                </li>
                <li>
                  <a href="#">Term &amp; Service</a>
                </li>
                <li>
                  <a href="#">Tulsy API</a>
                </li>
                <li>
                  <a href="#">Marketplace</a>
                </li>
              </ul>
            </div>
            {/* End col */}
            <div className="col-lg-3 col-10">
              <h6 className="text-uppercase fw-semibold">
                Social medial
                <span className="text-primary text-uppercase fs-18">Kasy</span>
              </h6>
              <p className="mt-md-3 pt-3 pt-md-2 fs-14">
                Semper nibh a dignissim Integer cursus tempsed.
              </p>
              <div className="footer-subcribe text-end shadow-sm d-inline-block">
                <form action="#">
                  <input placeholder="Your Email Address" type="email" />
                  <button type="submit" className="btn btn-primary">
                    <i className="mdi mdi-bell-ring"></i>
                  </button>
                </form>
              </div>
              <div className="mt-md-4 mt-3">
                <ul className="list-inline footer-social mb-0">
                  <li className="list-inline-item">
                    <a href="#" className="rounded">
                      <i className="mdi mdi-facebook text-dark"></i>
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a href="#" className="rounded">
                      <i className="mdi mdi-linkedin text-dark"></i>
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a href="#" className="rounded">
                      <i className="mdi mdi-pinterest text-dark"></i>
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a href="#" className="rounded">
                      <i className="mdi mdi-twitter text-dark"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </footer>
      {/* END FOOTER */}

      {/* FOOTER-ALT */}
      <div className="footer-alt pt-3 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <p className="mb-0 text-white">
                  Copyright © {new Date().getFullYear()}. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END FOOTER-ALT */}
    </>
  );
};

export default Footer;
