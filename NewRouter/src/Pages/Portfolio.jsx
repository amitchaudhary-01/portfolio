import React from "react";

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      name: "Kapda",
      link: " http://localhost:5174/",
    },
    {
      id: 2,
      name: "Bike Website",
      link: "http://localhost:5174/",
    },
    {
      id: 3,
      name: "Portfolio Website",
      link: "https://github.com/yourusername/portfolio",
    },
    {
      id: 3,
      name: "Movie Search Website",
      link: " http://localhost:5174/",
    },
    {
      id: 3,
      name: "Joke Generator",
      link: " http://localhost:5174/",
    },
  ];

  return (
    <div className="container py-5 text-white">
      <h1 className="text-center mb-5 fw-bold">
        My Portfolio
      </h1>

      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="p-4 bg-dark rounded shadow">
              <h4>{project.name}</h4>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-3"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;