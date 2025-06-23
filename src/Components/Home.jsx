import React, { useState, useEffect } from "react";
import homeImgSlideshow1 from "../assets/images/home-slideshow1.png"; // Update with your actual image paths
import homeImgSlideshow2 from "../assets/images/home-slideshow2.png"; // Update with your actual image paths
import homeImgSlideshow3 from "../assets/images/home-slideshow3.png"; // Update with your actual image paths
import homeImgSlideshow4 from "../assets/images/home-slideshow4.png"; // Update with your actual image paths

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    homeImgSlideshow1,
    homeImgSlideshow2,
    homeImgSlideshow3,
    homeImgSlideshow4,
  ];

  const intervalTime = 3000; // 3 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [slides.length]);

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
              <h1
                className="lh-sm"
                style={{
                  width: "570px",
                  height: "201.59px",
                  color: "#0F0D1D",
                  fontFamily: '"Kumbh Sans", sans-serif',
                  fontSize: "60px",
                  margin: "0px 0px 40px",
                  lineHeight: "1.2",
                }}
              >
                One Place With <br />
                <span className="text-primary">Everything </span>
                to <br /> Thrive
              </h1>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className="ms-md-4 home-slideshow-container"
              style={{
                position: "relative",
                height: "100%",
                overflow: "hidden",
              }}
            >
              {slides.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`home-slideshow-image ${
                    index === currentSlide ? "active" : ""
                  }`}
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    transition: "opacity 1s ease-in-out",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
