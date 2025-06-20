import React, { useState, useEffect } from "react";
import homeImgSlideshow1 from "../assets/images/home-slideshow1.png"; // Update with your actual image paths
import homeImgSlideshow2 from "../assets/images/home-slideshow2.png"; // Update with your actual image paths
import homeImgSlideshow3 from "../assets/images/home-slideshow3.png"; // Update with your actual image paths

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [homeImgSlideshow1, homeImgSlideshow2, homeImgSlideshow3];
  const intervalTime = 3000; // Time in milliseconds between slides (3 seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, intervalTime);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [slides.length]); // Re-run effect if the number of slides changes

  return (
    <section className="section home" id="home">
      <div className="container">
        <div className="row align-items-center mt-5 mt-lg-0">
          <div className="col-lg-5">
            <div className="home-heading">
              <h6 className="lh-sm">
                <span className="text-primary">
                  This is Your Exclusive Space
                </span>
              </h6>
              <h1 className="lh-sm">
                One Place With <br />
                Everything to
                <br />
                <span className="text-primary">Thrive</span>
              </h1>
            </div>
          </div>
          {/* end col*/}
          <div className="col-lg-7">
            <div className="ms-md-4 home-slideshow-container">
              {slides.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`home-slideshow-image ${
                    index === currentSlide ? "active" : ""
                  }`}
                  // Inline styles for slideshow functionality
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    // Change 'height: "auto"' to 'height: "100%"'
                    height: "100%",
                    transition: "opacity 1s ease-in-out",
                  }}
                />
              ))}
            </div>
          </div>
          {/* end col*/}
        </div>
        {/* end row*/}
      </div>
      {/* end container */}
    </section>
  );
};

export default Home;
