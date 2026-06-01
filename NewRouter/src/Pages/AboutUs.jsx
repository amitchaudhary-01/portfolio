import React from "react";

const AboutUs = () => {
  return (
    <div className="container py-5 text-white">
      
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="lead">
          We are a creative digital agency building modern web experiences.
        </p>
      </div>

      {/* Main Content */}
      <div className="row align-items-center mb-5">
        
        {/* Image */}
        <div className="col-md-6 mb-4">
          <img
            src="/tom and jerry.webp"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Who We Are</h2>
          <p>
            We are a passionate team of developers, designers, and creators
            dedicated to building high-quality web applications and digital
            products. Our goal is to deliver modern, fast, and user-friendly
            solutions for businesses and individuals.
          </p>

          <p>
            With experience in React, Node.js, and modern UI frameworks, we
            focus on clean design and performance optimization.
          </p>

          <button className="btn btn-primary mt-3">
            Learn More
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row text-center">
        
        <div className="col-md-4 mb-3">
          <div className="p-4 bg-dark rounded shadow">
            <h4>🚀 Our Mission</h4>
            <p>To build modern and scalable web applications.</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-4 bg-dark rounded shadow">
            <h4>🎯 Our Vision</h4>
            <p>To become a leading digital solutions provider.</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-4 bg-dark rounded shadow">
            <h4>💡 Our Values</h4>
            <p>Innovation, quality, and customer satisfaction.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;