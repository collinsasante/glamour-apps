import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import ProjectCard from "./Components/ProjectCard";
import ProjectSection from "./Components/ProjectSection";

function App() {
  // Simulate original app.js behavior for scroll spy and sticky navbar
  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("#navbar-navlist a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
            behavior: "smooth",
          });
        }
      });
    });

    // Sticky Navbar
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY >= 50) {
        // Adjust scroll threshold as needed
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Bootstrap scrollspy (data-bs-spy on body handled by bootstrap.bundle.min.js)
    // No direct JS needed here for scrollspy if Bootstrap JS is loaded globally

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <ProjectSection />
      <Contact />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
