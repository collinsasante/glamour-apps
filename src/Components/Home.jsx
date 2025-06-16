import React from "react";
import homeImg from "../assets/images/home.png";

const Home = () => {
  return (
    <section className="section home" id="home">
      <div className="container">
        <div className="row align-items-center mt-5 mt-lg-0">
          <div className="col-lg-5">
            <div className="home-heading">
              <h6 className="text-uppercase text-muted">
                I'm Graphics Designer
              </h6>
              <h1 className="lh-sm">
                Make your life simplier with{" "}
                <span className="text-primary">Kasy</span>
              </h1>
            </div>
          </div>
          {/* end col*/}
          <div className="col-lg-7">
            <div className="ms-md-4">
              <img
                className="home-img"
                src={homeImg}
                alt="Kasy Home Illustration"
              />
            </div>
          </div>
          {/* end col*/}
        </div>
        {/* end row*/}
      </div>
      {/*end container*/}

      {/*end row*/}
      {/*end container*/}
    </section>
  );
};

export default Home;
