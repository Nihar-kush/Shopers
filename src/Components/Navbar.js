import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="container sticky-top vw-100">
      <nav className="navbar navbar-expand-lg bg-dark rounded-bottom ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand text-light fst-italic fw-bold" href="#">
            Fakeshop
          </a>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
            <form className="d-flex mx-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light">Search</button>
            </form>
            <div className="d-flex gap-4 text-light mx-auto">
              <a href="#" className="fs-4 text-light focus-none">
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a href="#" className="fs-4 text-light focus-none">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
              <a href="#" className="fs-4 text-light focus-none">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
