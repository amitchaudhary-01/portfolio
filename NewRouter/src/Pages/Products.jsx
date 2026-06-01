import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Data from '../Components/Data';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const user = await axios.get("https://dummyjson.com/products");
      setData(user.data.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-5 bg-gray-900 min-h-screen">
      <h1 className="text-white text-3xl mb-5">Products</h1>

      {loading ? (
  <h2 className="text-white">Loading...</h2>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {data.map((value, index) => (
    <Data
      key={value.id}
      id={value.id}
      index={index}
      title={value.title}
      description={value.description}
      category={value.category}
      price={value.price}
      rating={value.rating}
      stock={value.stock}
      src={value.thumbnail}
    />
  ))}
</div>
)}
    </div>
  );
};

export default Products;