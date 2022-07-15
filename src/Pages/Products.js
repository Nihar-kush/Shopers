import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import Loading from "../Components/Loading";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [response, setResponse] = useState([]);
  const [response1, setResponse1] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseURL = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await axios.get(baseURL);
      setResponse(response.data);
      setProducts(response.data);
      setResponse1(response.data);
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
    <div className="">
      <Navbar response1={response1} setProducts={setProducts} />
      <div className="container">
        <div className="row justify-content-center d-flex ">
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
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {products.map((product) => (
            <Card product={product} key={product.id} id={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
