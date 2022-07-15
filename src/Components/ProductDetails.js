import React from "react";
import ReactImageMagnify from "react-magnify-image";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetails({ product }) {
  const rating = product.rating;
  return (
    <div className="bg-light container-fluid px-md-5 px-3 vh-100">
      <Link to="/" className="text-dark fs-1 m-md-5 ">
        <FontAwesomeIcon icon={faCircleArrowLeft} />
      </Link>

      <div className="product-details bg-light d-flex row justify-content-center align-items-center  mx-md-5 mt-2 shadow-lg p-5">
        <div className="container col-md-3 col-12 ">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "",
                isFluidWidth: true,
                src: product.image,
              },
              largeImage: {
                src: product.image,
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "130%",
              },
            }}
          />
        </div>
        <div className="col-md-6 col-12">
          <p className="fs-6 text-black-50 text-uppercase ">
            {product.category}
          </p>
          <h5 className="fs-2 fw-semibold">{product.title}</h5>
          <p className="fs-5">
            Rating - {rating && rating.rate}
            <FontAwesomeIcon icon={faStar} />
          </p>
          <p className="fs-3 fw-bold">₹{product.price}</p>
          <p className=" lead">{product.description}</p>
          <div className="d-flex gap-2">
            <div className="btn btn-dark">BUY NOW</div>
            <div className="btn btn-outline-dark">ADD TO CART</div>
          </div>
        </div>
      </div>
    </div>
  );
}
