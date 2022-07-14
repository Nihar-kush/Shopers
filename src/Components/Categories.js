import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

export default function Categories({ filterProducts }) {
  return (
    <div className="d-flex justify-content-center my-5 gap-2">
      <a className="btn btn-outline-dark" onClick={() => filterProducts("All")}>
        All
      </a>
      <a
        className="btn btn-outline-dark"
        onClick={() => filterProducts("men's clothing")}
      >
        men's clothing
      </a>
      <a
        className="btn btn-outline-dark"
        onClick={() => filterProducts("jewelery")}
      >
        jewelery
      </a>
      <a
        className="btn btn-outline-dark"
        onClick={() => filterProducts("electronics")}
      >
        electronics
      </a>
      <a
        className="btn btn-outline-dark"
        onClick={() => filterProducts("women's clothing")}
      >
        women's clothing
      </a>
    </div>
  );
}
