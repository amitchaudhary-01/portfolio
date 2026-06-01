import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Data = ({ title, description, price, rating, stock, src, category,id }) => {

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-blue-500" />);
      }
    }

    return stars;
  };

  return (
    <Link to={`/products/${id}`}>
    <div className="bg-white rounded-lg shadow-lg p-4 h-full flex flex-col">
      <img src={src} alt={title} className="h-48 w-full object-cover rounded"/>

      <h2 className="text-xl font-bold mt-3">{title}</h2>

      <p className="text-gray-600 mt-2 flex-1">{description}</p>

      <div className="mt-3">
        <p>Category: {category}</p>
        <p className="text-orange-400">Price: ${price}</p>

        <div className="flex items-center gap-1">
          {renderStars(rating)}
          <span className="ml-2 text-sm text-gray-600">
            ({rating})
          </span>
        </div>

        <p className="text-green-400">Stock: {stock}</p>
      </div>

      <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
    </div>
    </Link>
  );
};

export default Data;