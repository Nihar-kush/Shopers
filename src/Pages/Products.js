import React, { useEffect } from "react";
import Card from "../Components/Card";
import axios from "axios";
import Loading from "../Components/Loading";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";

export default function Products() {
  const [products, setProducts] = React.useState([]);
  const [response, setResponse] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const baseURL = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await axios.get(baseURL);
      setResponse(response.data);
      setProducts(response.data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const filterProducts = (category) => {
    if (category === "All") {
      setProducts(response);
    } else {
      const filteredProducts = response.filter(
        (product) => category === product.category
      );
      setProducts(filteredProducts);
    }
  };
  return (
    <div className="w-100">
      <Navbar />
      <div className="container">
        <div className="row">
          {loading ? (
            <Loading />
          ) : (
            <Categories
              filterProducts={filterProducts}
              products={products}
              setProducts={setProducts}
            />
          )}
        </div>
        <div className="row d-flex justify-content-center">
          {products.map((product) => (
            <Card product={product} key={product.id} id={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
