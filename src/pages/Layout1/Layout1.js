import React, { Component, Suspense } from "react";

// Importing Section
const Navbar = React.lazy(() => import("../../component/Navbar/NavBar"));

const Section = React.lazy(() => import("./Section"));
const Project = React.lazy(() => import("../../component/Project"));
const Contact = React.lazy(() => import("../../component/Contact"));
const Footer = React.lazy(() => import("../../component/Footer/Footer"));

class Layout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 5, idnm: "project", navheading: "Project" },
        { id: 7, idnm: "contact", navheading: "Contact Us" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: false });
    }
  };

  //set preloader div
  PreLoader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.PreLoader()}>
          {/* Importing Navbar */}
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
          />

          {/* Importing Section */}
          <Section />

          {/* Importing Project */}
          <Project />

          {/* Importing Contact Us */}
          <Contact />

          {/* Importing Footer */}
          <Footer />
        </Suspense>
      </React.Fragment>
    );
  }
}
export default Layout1;
