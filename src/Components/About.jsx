import React from "react";
import aboutImg from "../assets/images/about.png";
import aboutImg2 from "../assets/images/about-2.png";
import aboutImg3 from "../assets/images/about-3.png";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="text-center mb-lg-5">
              <h3 className="heading">Modern & Powerful Interface</h3>
              <p className="text-muted fs-17 mb-0">
                In an ideal world this website wouldn’t exist, a client would
                acknowledge the importance design starts.
              </p>
            </div>
          </div>
          {/* end col  */}
        </div>
        {/* end row  */}
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="card border-0">
              <img src={aboutImg} alt="About Interface" />
            </div>
          </div>
          {/* end col  */}
          <div className="col-lg-5">
            <div className="card border-0">
              <div className="card-body">
                <div className="about-title">
                  <span></span>
                  <h6 className="text-uppercase">Dynamic Growth.</h6>
                </div>
                <h4>It’s Everything You’ll Ever Need.</h4>
                <p className="text-muted lh-base">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem at enim ad minima veniam.
                </p>
                <div className="about-link">
                  <a href="#">
                    Know More <i className="mdi mdi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* end col  */}
        </div>
        {/* end row  */}
        <div className="row my-4 align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="card border-0">
              <div className="card-body">
                <div className="me-lg-5">
                  <div className="about-title">
                    <span></span>
                    <h6 className="text-uppercase">About Us.</h6>
                  </div>
                  <h4>We're knowledgeable about making benefits higher.</h4>
                  <p className="text-muted">
                    Morbi pretium neque id viverra dolor, luctus porta iaculis
                    purus tempor ultricies varius magni at congue rutrum. Lorem
                    ipsum dolor amet elitr nonumy eirmod tempor integer tempus
                    aliquet neque dolor feugiat felis ipsum massa nec faucibus
                  </p>
                  <div className="about-link">
                    <a href="#">
                      Know More <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* End card-body */}
            </div>
            {/* End card */}
          </div>
          {/* end col  */}
          <div className="col-lg-6">
            <img
              src={aboutImg2}
              className="img-fluid"
              alt="About Us Illustration"
            />
          </div>
          {/* end col  */}
        </div>
        {/* end row  */}
        <div className="row align-items-center justify-content-between pt-lg-5">
          <div className="col-lg-6">
            <div className="buy-about-img">
              <img
                src={aboutImg3}
                className="img-fluid"
                alt="Trusted Platform"
              />
            </div>
          </div>
          {/* End col */}
          <div className="col-lg-5">
            <div className="ms-lg-5">
              <div className="about-title">
                <span></span>
                <h6 className="text-uppercase">100% Trustd Platform.</h6>
              </div>
              <h4>Easy Way to Manage your team</h4>
              <p className="text-muted">
                We bring the breathe of our experience and industry knowledge to
                help your team. Visualize you product roadmap write about spaces
                cross-functional collaboration
              </p>
              <div className="about-link">
                <a href="#">
                  Know More <i className="mdi mdi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* End col */}
        </div>
        {/* End row */}
      </div>
      {/* end container  */}
    </section>
  );
};

export default About;
