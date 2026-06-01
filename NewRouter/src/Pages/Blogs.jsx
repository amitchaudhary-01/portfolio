import React from "react";

const Blogs = () => {
  const posts = [
    {
      id: 1,
      title: "Learn React in 2026",
      desc: "React is still one of the most popular frontend libraries...",
      img: "/blog1.jpg",
    },
    {
      id: 2,
      title: "JavaScript Tips & Tricks",
      desc: "Improve your JavaScript skills with these useful tips...",
      img: "/blog2.jpg",
    },
    {
      id: 3,
      title: "Web Development Trends",
      desc: "AI, performance, and modern UI are shaping the web...",
      img: "/blog3.jpg",
    },
  ];

  return (
    <div className="container py-5 text-white">
      <h1 className="text-center mb-5 fw-bold">Our Blogs</h1>

      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card bg-dark text-white shadow">
              <img src={post.img} className="card-img-top" alt={post.title} />

              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.desc}</p>

                <button className="btn btn-primary btn-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;