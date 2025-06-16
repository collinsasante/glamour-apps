import React, { useEffect } from "react";
import counterBg from "../assets/images/counter-bg.png"; // Path to background image

const Counter = () => {
  useEffect(() => {
    const counter = document.querySelectorAll(".counter_value");
    const interval = 1000;

    const animateCounter = (entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".counter_value").forEach((value) => {
          let startValue = 0;
          let endValue = parseInt(value.getAttribute("data-target"));
          let duration = Math.floor(interval / endValue); // Speed up for larger numbers

          let counterInterval = setInterval(() => {
            startValue += 1;
            value.textContent = startValue;
            if (startValue === endValue) {
              clearInterval(counterInterval);
            }
          }, duration);
        });
        observer.unobserve(entry.target); // Stop observing once animated
      }
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => animateCounter(entry));
      },
      { threshold: 0.5 }
    ); // Trigger when 50% of the element is visible

    // Observe the parent element containing all counters
    const counterSection = document.querySelector(".bg-counter");
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => {
      if (counterSection) {
        observer.unobserve(counterSection);
      }
    };
  }, []);

  return (
    <section
      className="bg-counter w-100"
      style={{ backgroundImage: `url(${counterBg})` }}
    >
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h3 className="heading">
                We're all about helping you reach your next financial goal and
                loan help
              </h3>
              <p className="text-muted">
                Organized workflow and predictive patterns to boost your
                revenue.
              </p>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row justify-content-lg-between justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className="mt-5 text-center">
              <h1 className="fw-semibold display-6 mb-3">
                <span className="counter_value" data-target="3700">
                  0
                </span>
                <span>k</span>
              </h1>
              <p className="mb-0 fs-17 text-muted">
                Customer Empowered $5 billion+
              </p>
            </div>
          </div>
          {/*end col*/}
          <div className="col-lg-3 col-md-6">
            <div className="mt-5 text-center">
              <h1 className="fw-semibold display-6 mb-3">
                <span className="counter_value" data-target="250">
                  0
                </span>
                <span>+</span>
              </h1>
              <p className="mb-0 fs-17 text-muted">
                Times Internaational Award Winner
              </p>
            </div>
          </div>
          {/*end col*/}
          <div className="col-lg-3 col-md-6">
            <div className="mt-5 text-center">
              <h1 className="fw-semibold display-6 mb-3">
                <span className="counter_value" data-target="34780">
                  0
                </span>
                <span>+</span>
              </h1>
              <p className="mb-0 fs-17 text-muted">
                Completed Projects $19 billion+
              </p>
            </div>
          </div>
          {/*end col*/}
          <div className="col-lg-12">
            <div className="d-flex justify-content-center">
              <div className="mt-5">
                <a className="btn btn-outline-dark" href="#">
                  Know More <i className="mdi mdi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*emd row*/}
      </div>
      {/*end container*/}
    </section>
  );
};

export default Counter;
