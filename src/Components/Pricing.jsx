import React from "react";

const Pricing = () => {
  return (
    <section className="section pricing" id="pricing">
      <div className="bg-shape"></div>
      <div className="container">
        <div className="row gy-5 justify-content-center">
          <div className="col-lg-12">
            <div className="text-center">
              <h3 className="heading">Choose a plan that's right for you</h3>
              <p className="text-muted"> 30 - day money back guarantee</p>
            </div>
          </div>
          {/* End col */}
          <div className="col-lg-4 col-md-6">
            <span className="pricing-bg"></span>
            <div className="card pricing-box border-light h-100 py-5 mx-1">
              <div className="pb-4 text-center border-bottom">
                <h6 className="text-info">Standard</h6>
                <h1 className="mb-0 pt-2 fw-bold">
                  $10{" "}
                  <sub className="fs-14 fw-normal text-muted">/-Monthly</sub>
                </h1>
              </div>
              <div className="p-4 pb-0">
                <ul className="list-unstyled">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shring-0">
                        <i className="mdi mdi-circle-medium"></i>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <span> Email Accounts </span>
                        <p className="text-muted fs-12 mb-0"> Daily 50 Mails</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shring-0">
                        <i className="mdi mdi-circle-medium"></i>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <span>Limited Storage </span>
                        <p className="text-muted fs-12 mb-0"> 50 Gb</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shring-0">
                        <i className="mdi mdi-circle-medium"></i>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <span> Data Transfer </span>
                        <p className="text-muted fs-12 mb-0"> Monthly 20GB</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-auto">
                <a href="#" className="btn btn-outline-dark">
                  Choose Plan
                </a>
              </div>
            </div>
            {/* End card */}
          </div>
          {/* end col */}
          <div className="col-lg-4 col-md-6">
            <div className="card pricing-box border-light h-100 py-5 mx-1 active">
              <div className="pb-4 text-center border-bottom">
                <h6 className="text-danger">Premium</h6>
                <h1 className="mb-0 pt-2 fw-bold">
                  $30{" "}
                  <sub className="fs-14 fw-normal text-muted">/-Monthly</sub>
                </h1>
              </div>
              <div className="p-4 pb-0">
                <ul className="list-unstyled">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shring-0">
                        <i className="mdi mdi-circle-medium"></i>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <span> Email Accounts </span>
                        <p className="text-muted fs-12 mb-0">
                          {" "}
                          Daily 100 Mails
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shring-0">
                        <i className="mdi mdi-circle-medium"></i>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <span> Limited Storage </span>
                        <p className="text-muted fs-12 mb-0"> 200 Gb</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shring-0">
                        <i className="mdi mdi-circle-medium"></i>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <span> Data Transfer </span>
                        <p className="text-muted fs-12 mb-0"> Monthly 50GB</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-auto">
                <a href="#" className="btn btn-outline-dark active">
                  Choose Plan
                </a>
              </div>
            </div>
            {/* End card */}
          </div>
          {/* col end */}
          <div className="col-lg-4 col-md-6">
            <div className="card pricing-box border-light h-100 py-5 mx-1">
              <div className="pb-4 text-center border-bottom">
                <h6 className="text-primary">Enterprise</h6>
                <h1 className="mb-0 pt-2 fw-bold">
                  $39{" "}
                  <sub className="fs-14 fw-normal text-muted">/-Monthly</sub>
                </h1>
              </div>
              <div className="p-4 pb-0">
                <ul className="list-unstyled">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shring-0">
                        <i className="mdi mdi-circle-medium"></i>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <span> Email Accounts </span>
                        <p className="text-muted fs-12 mb-0">
                          {" "}
                          Daily Unlimited Mails
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shring-0">
                        <i className="mdi mdi-circle-medium"></i>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <span> Unlimited Storage </span>
                        <p className="text-muted fs-12 mb-0">
                          {" "}
                          Use Unlimited Space
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shring-0">
                        <i className="mdi mdi-circle-medium"></i>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <span> Data Transfer </span>
                        <p className="text-muted fs-12 mb-0"> Monthly 100GB</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-auto">
                <a href="#" className="btn btn-outline-dark">
                  Choose Plan
                </a>
              </div>
            </div>
            {/* End card */}
          </div>
          {/* col end */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Pricing;
