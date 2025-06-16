import React from "react";

const Features = () => {
  const featuresData = [
    {
      icon: "mdi mdi-trophy-variant-outline",
      title: "Responsive Layout",
      description:
        "Aenean tellus metus bibendum sed posuere ac pede amet augue turpis Pellentesque posuere.",
    },
    {
      icon: "mdi mdi-atom",
      title: "Powerful Performance",
      description:
        "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.",
    },
    {
      icon: "mdi mdi-email-outline",
      title: "Work With Love",
      description:
        "Pellentesque habitant morbi tristique senectus et turpis egestas dui magna posuere eget justo.",
    },
    {
      icon: "mdi mdi-lock-open",
      title: "Unique Design",
      description:
        "In ac felis quis tortor malesuada pretium pellentesque sapien ipsum porta euismod ut mi.",
    },
    {
      icon: "mdi mdi-shield-account-outline",
      title: "Retina Ready Graphics",
      description:
        "Donec elit libero sodales nec volutpat a suscipit nec pellentesque velit pedepede primis.",
    },
    {
      icon: "mdi mdi-octagram-outline",
      title: "Creative Design",
      description:
        "Maecenas ullamcorper dui et placerat feugiat eros pede felis nunc loremlorem Sed fermentum.",
    },
  ];

  return (
    <section className="section features features-bg" id="features">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="text-center mb-5">
              <h3 className="heading">Features</h3>
              <p className="text-muted fs-17">
                Ut enim ad minima veniam quis nostrum exercitationem ullam
                corporis suscipit laboriosam nisi commodi consequatur.
              </p>
            </div>
          </div>
          {/* end col*/}
        </div>
        {/* end row*/}
        <div className="row">
          {featuresData.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card features-card">
                <div className="card-body">
                  <div className="avatar-md mb-4">
                    <div className="avatar-title bg-primary rounded-circle">
                      <i className={feature.icon}></i>
                    </div>
                  </div>
                  <h5>{feature.title}</h5>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
};

export default Features;
