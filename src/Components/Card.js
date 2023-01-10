import React from "react";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <div className="card col-md-5 col-lg-3 col-11 mx-3 mb-5 shadow-lg ">
      <img
        src={product.image}
        className="cardImg img-fluid h-75 w-100 p-5 object-contain "
        alt="..."
      />

      <div className="card-body">
        <h5 className="card-title text-truncate fw-bold fs-3">
          {product.title}
        </h5>
        <p className="card-text fw-semibold fs-5">₹{product.price}</p>
        <Link to={`/${product.id}`} className="btn btn-dark">
          Buy Now
        </Link>
      </div>
    </div>
  );
}
