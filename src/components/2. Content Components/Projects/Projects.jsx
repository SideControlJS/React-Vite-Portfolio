import React from 'react';
import './Projects.css';
import { projectData } from '../../../myInfo';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// added isImageURL function to check if demoUrl is an image URL or not
const isImageURL = (url) => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  return imageExtensions.some((extension) => url.toLowerCase().endsWith(extension));
};

// added ProjectCard subcomponent
const ProjectCard = ({ project }) => {
  const renderDemoContent = () => {
    if (isImageURL(project.demoUrl)) {
      return <img src={project.demoUrl} alt="Project Thumbnail" />;
    } else {
      return <iframe src={project.demoUrl} title="Project Demo" allowFullScreen />;
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-description">{project.description}</p>
        </div>
        <div className="demo-container">
          {renderDemoContent()}
        </div>
        <div className="card-footer">
          <a href={project.demoUrl} className="btn btn-primary">
            Demo
          </a>
          <a href={project.githubUrl} className="btn btn-secondary">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

// added Projects subcomponent
const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 1 } },
    ],
  };

  
  return (
    <section id="Projects" className="projects section">
      <div className="container">
        <div className="section-title">
          <h3>Projects</h3>
          <h2>UCF Full Stack Web Development Bootcamp</h2>
          <p>A few projects and assignments from the UCF Full Stack Web Development Bootcamp...</p>
        </div>
        <Slider {...settings}>
          {projectData.map((project, index) => (
            <div key={project.id || index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
