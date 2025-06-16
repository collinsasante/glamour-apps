import React from "react";
import homeImg from "../assets/images/home.png";

const Home = () => {
  return (
    <section className="section home" id="home">
      <div className="container">
        <div className="row align-items-center mt-5 mt-lg-0">
          <div className="col-lg-5">
            <div className="home-heading">
              <h6 className="lh-sm">
                <span className="text-primary">
                  {" "}
                  this is your exclusive space{" "}
                </span>
              </h6>
              <h1 className="lh-sm">
                A Central Resource For Everything You Need to{" "}
                <span className="text-primary">Thrive</span>
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
