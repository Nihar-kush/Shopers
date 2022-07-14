import React from "react";
import ReactImageMagnify from "react-magnify-image";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetails({ product }) {
  const rating = product.rating;
  return (
    <div className="bg-light vh-100 p-5">
      <Link to="/" className="text-dark fs-3 m-5">
        <FontAwesomeIcon icon={faCircleArrowLeft} />
      </Link>

      <div className="product-details bg-light d-flex justify-content-center align-items-center border  mx-5 mt-5 shadow-lg p-5">
        <div className="container col-md-3 ">
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
                height: "100%",
              },
            }}
          />
        </div>
        <div className="container col-md-8  border-start border-dark">
          <p className="fs-3 text-uppercase ">{product.category}</p>
          <h5 className="fs-3 fw-bold">{product.title}</h5>
          <p className="fs-5">{product.description}</p>
          <p className="fs-5">
            Rating - {rating && rating.rate}
            <FontAwesomeIcon icon={faStar} />
          </p>
          <p className="fs-3 fw-bold">₹{product.price}</p>
          <div className="d-flex gap-2">
            <div className="btn btn-dark">BUY NOW</div>
            <div className="btn btn-outline-dark">ADD TO CART</div>
          </div>
        </div>
      </div>
    </div>
  );
}
