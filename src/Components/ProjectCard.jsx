import React from "react";

const ProjectCard = ({ image, title, link, description }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card project-card border-light h-100 mx-1">
        <img src={image} alt={title} className="card-img-top rounded-top" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mt-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              {title}
            </a>
          </h5>
          <p className="card-text text-muted flex-grow-1">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark mt-3"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
