import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductsView = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://dummyjson.com/products/${id}`
      );

      setUser(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Product ID: {id}</h1>

        <div>
          <h2>{user.title}</h2>
          <p>{user.description}</p>
          <p>Price: ${user.price}</p>

          <img
            src={user.thumbnail}
            alt={user.title}
            width="200"
          />
        </div>

    </div>
  );
};

export default ProductsView;