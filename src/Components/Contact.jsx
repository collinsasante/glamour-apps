import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    comments: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, comments } = formData;
    if (!name || !email || !comments) {
      setErrorMsg("Please fill in all required fields.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return false;
    }
    setErrorMsg("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to a server
      console.log("Form data submitted:", formData);
      setSuccessMsg("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        comments: "",
      });
      setTimeout(() => setSuccessMsg(""), 5000); // Clear success message after 5 seconds
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <h3 className="heading">Contact Us</h3>
              <p className="text-muted mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-lg-6">
            <form
              onSubmit={handleSubmit}
              className="contact-form"
              name="myForm"
              id="myForm"
            >
              {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
              {successMsg && (
                <div className="alert alert-success">{successMsg}</div>
              )}
              <div className="row">
                <div className="col-lg-6">
                  <div className="position-relative mb-3">
                    <span className="input-group-text">
                      <i className="mdi mdi-account-outline"></i>
                    </span>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter your name*"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative mb-3">
                    <span className="input-group-text">
                      <i className="mdi mdi-email-outline"></i>
                    </span>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email*"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="position-relative mb-3">
                    <span className="input-group-text">
                      <i className="mdi mdi-file-document-outline"></i>
                    </span>
                    <input
                      name="subject"
                      id="subject"
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="position-relative mb-3">
                    <span className="input-group-text align-items-start">
                      <i className="mdi mdi-comment-text-outline"></i>
                    </span>
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      className="form-control"
                      placeholder="Enter your message*"
                      value={formData.comments}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="btn btn-primary"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
            {/*end form*/}
          </div>
          {/*end col*/}
          <div className="col-lg-4">
            <div className="contact-details mb-4 mb-lg-0">
              <p className="mb-3">
                <i className="mdi mdi-email-outline align-middle text-muted fs-20 me-2"></i>{" "}
                <span className="fw-medium">support@website.com</span>
              </p>
              <p className="mb-3">
                <i className="mdi mdi-web align-middle text-muted fs-20 me-2"></i>{" "}
                <span className="fw-medium">www.website.com</span>
              </p>
              <p className="mb-3">
                <i className="mdi mdi-phone align-middle text-muted fs-20 me-2"></i>{" "}
                <span className="fw-medium">+278 5678 8901</span>
              </p>
              <p className="mb-3">
                <i className="mdi mdi-hospital-building text-muted fs-20 me-2"></i>{" "}
                <span className="fw-medium">9:00 AM - 6:00 PM</span>
              </p>
              <p className="mb-3">
                <i className="mdi mdi-map-marker-outline text-muted fs-20 me-2"></i>{" "}
                <span className="fw-medium">12, MK Street, NC, 452768.</span>
              </p>
            </div>
            {/*end contact-details*/}
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
      {/*end container*/}
    </section>
  );
};

export default Contact;
