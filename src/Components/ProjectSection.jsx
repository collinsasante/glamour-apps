import React from "react";
import ProjectCard from "./ProjectCard";
import calculatorImg from "../assets/images/calculator.jpg";
import lableImg from "../assets/images/lable.jpg";
import leadsImg from "../assets/images/leads.jpg";
const ProjectSection = () => {
  const projects = [
    {
      image: calculatorImg,
      title: "Label Calculator",
      link: "https://example.com/glamour-qr",
      description:
        "A secure QR scanning system for validating product authenticity.",
    },
    {
      image: lableImg,
      title: "Designers Review App",
      link: "https://example.com/review-app",
      description:
        "Collect and display feedback from fashion designers across Ghana.",
    },
    {
      image: leadsImg,
      title: "Leads Manager",
      link: "https://example.com/leads-manager",
      description:
        "CRM tool to capture and manage marketing leads for businesses.",
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="heading">Applications</h3>
          <p className="text-muted">
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <div className="row gy-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
