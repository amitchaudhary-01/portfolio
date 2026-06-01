import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-5">
      <div className="container py-5">
        <div className="row">

          {/* Company */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="fw-bold">My Website</h4>
            <p>
              Building modern web applications with React,
              Bootstrap, and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li>
                <Link to="/aboutus" className="text-white text-decoration-none">about</Link>
              </li>
              <li><a href="/portfolio" className="text-white text-decoration-none">Portfolio</a></li>
              <li><a href="/blog" className="text-white text-decoration-none">Blogs</a></li>
              <li><a href="/products" className="text-white text-decoration-none">Products</a></li>
              <li><a href="/ourteam" className="text-white text-decoration-none">Our team</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="fw-bold">Contact</h5>
            <p>Email: ac984939@gmail.com</p>
            <p>Phone: +977 98XXXXXXXX</p>
            <p>Nepal</p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-3 border-top border-secondary">
        <p className="mb-0">
          © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;